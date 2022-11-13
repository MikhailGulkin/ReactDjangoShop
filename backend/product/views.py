from rest_framework import generics
from .models import ProductClothesTShort
from .serializers import ProductTShortSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class ProductsListTShortAPIView(generics.ListAPIView):
    queryset = ProductClothesTShort.objects.all()
    serializer_class = ProductTShortSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ProductTShortAPIView(generics.RetrieveAPIView):
    queryset = ProductClothesTShort.objects.all()
    serializer_class = ProductTShortSerializer
