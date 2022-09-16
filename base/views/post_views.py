from contextvars import Token
from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from base.permisions import IsDeveloper, IsLeadDeveloper
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import Post, Review, Tag
from base.serializers import PostSerializer

from rest_framework import status

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsLeadDeveloper])
def getPosts(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''

    posts = Post.objects.filter(
        title__icontains=query).order_by('-created_at')

    page = request.query_params.get('page')
    paginator = Paginator(posts, 8)

    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)
    print('Page:', page)
    serializer = PostSerializer(posts, many=True)
    return Response({'posts': serializer.data, 'page': page, 'pages': paginator.num_pages})

@api_view(['GET'])
def getPost(request, pk):
    post = Post.objects.get(_id=pk)
    serializer = PostSerializer(post, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated,IsLeadDeveloper])
def createPost(request):
    user = request.user

    post = Post.objects.create(
        user=user,
        title='Sample Title',
        description='',
        body =''
    )

    serializer = PostSerializer(post, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated,IsLeadDeveloper])
def updatePost(request, pk):
    data = request.data
    post = Post.objects.get(_id=pk)

    post.name = data['name']
    post.description = data['description']
    post.body = data['body']

    post.save()

    serializer = PostSerializer(post, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated,IsLeadDeveloper])
def deletePost(request, pk):
    post = Post.objects.get(_id=pk)
    post.delete()
    return Response('post Deleted')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createPostReview(request, pk):
    user = request.user
    post = Post.objects.get(_id=pk)
    data = request.data

    # 1 - Review already exists
    alreadyExists = post.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'Post already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 3 - Create review
    else:
        review = Review.objects.create(
            user=user,
            post=post,
            name=user.first_name,
            comment=data['comment'],
        )

        reviews = post.review_set.all()
        post.numReviews = len(reviews)

        post.save()

        return Response('Review Added')