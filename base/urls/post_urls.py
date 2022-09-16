from django.urls import path
from base.views import post_views as views

urlpatterns = [

    path('', views.getPosts, name="products"),

    path('create/', views.createPost, name="product-create"),

    path('<str:pk>/reviews/', views.createPostReview, name="create-review"),
    path('<str:pk>/', views.getPost, name="product"),

    path('update/<str:pk>/', views.updatePost, name="product-update"),
    path('delete/<str:pk>/', views.deletePost, name="product-delete"),
]