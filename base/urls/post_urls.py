from django.urls import path
from base.views import post_views as views

urlpatterns = [

    path('', views.getPosts, name="posts"),

    path('create/', views.createPost, name="post-create"),

    path('<str:pk>/reviews/', views.createPostReview, name="create-review"),
    path('post/', views.PostCreateView.as_view(), name="post-richtext"),
    path('<str:pk>/', views.getPost, name="post"),

    path('update/<str:pk>/', views.updatePost, name="post-update"),
    path('delete/<str:pk>/', views.deletePost, name="post-delete"),
    
]