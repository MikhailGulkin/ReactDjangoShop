from rest_framework import generics
from .models import ProductClothesTShirt
from .serializers import ProductTShirtSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.filters import OrderingFilter, SearchFilter
from django.db.models import F


class ProductsListTShirtAPIView(generics.ListAPIView):
    queryset = ProductClothesTShirt.objects.annotate(
        totalPrice=F('price') * (1 - F('discount') / 100))
    serializer_class = ProductTShirtSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('title',)
    ordering_fields = ('totalPrice',)


class ProductTShirtAPIView(generics.RetrieveAPIView):
    queryset = ProductClothesTShirt.objects.all()
    serializer_class = ProductTShirtSerializer
