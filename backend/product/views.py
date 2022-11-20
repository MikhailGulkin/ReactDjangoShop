from rest_framework import generics
from .models import ProductClothesTShort
from .serializers import ProductTShortSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.filters import OrderingFilter, SearchFilter
from django.db.models import F, Sum


class ProductsListTShortAPIView(generics.ListAPIView):
    queryset = ProductClothesTShort.objects.annotate(
        totalPrice=F('price') * (1 - F('discount') / 100))
    serializer_class = ProductTShortSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('title',)
    ordering_fields = ('totalPrice',)


class ProductTShortAPIView(generics.RetrieveAPIView):
    queryset = ProductClothesTShort.objects.all()
    serializer_class = ProductTShortSerializer
