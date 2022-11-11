from django.shortcuts import render
from rest_framework import generics
from .models import ProductClothesTShort
from .serializers import ProductTShortSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class ProductListTShortAPIView(generics.ListAPIView):
    queryset = ProductClothesTShort.objects.all()
    serializer_class = ProductTShortSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
