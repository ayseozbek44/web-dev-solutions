from django import urls


from django.contrib import admin
from django.urls import path
from shop.views import view_article

urlpatterns = [
    path('articles/<int:id>/', view_article),
]
