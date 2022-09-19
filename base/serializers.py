from dataclasses import fields
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    isDeveloper = serializers.SerializerMethodField(read_only=True)
    isLeadDeveloper = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'isDeveloper', 'isLeadDeveloper']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_isDeveloper(self, obj):
        return obj.is_developer

    def get_isLeadDeveloper(self, obj):
        return obj.is_lead_developer

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token', 'isDeveloper', 'isLeadDeveloper']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField(read_only=True)
    Tags = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Post
        fields = "__all__"
        
    def get_reviews(self, obj):
        reviews = obj.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data

    def get_tags(self, obj):
        tags = obj.tag_set.all()
        serializer = TagSerializer(tags, many=True)
        return serializer.data