from rest_framework import generics
from .models import ProductClothesTShirt, ProductClothesHoodie
from .serializers import ProductTShirtSerializer, ProductHoodieSerializer
from django.db.models import F
from .mixins.services import BaseProductSettingsMixin


class ProductsListTShirtAPIView(
    BaseProductSettingsMixin,
    generics.ListAPIView
):
    queryset = ProductClothesTShirt.objects.annotate(
        totalPrice=F('price') * (1 - F('discount') / 100))
    serializer_class = ProductTShirtSerializer


class ProductsListHoodieAPIView(
    BaseProductSettingsMixin,
    generics.ListAPIView
):
    queryset = ProductClothesHoodie.objects.annotate(
        totalPrice=F('price') * (1 - F('discount') / 100))
    serializer_class = ProductHoodieSerializer


class ProductTShirtAPIView(generics.RetrieveAPIView):
    queryset = ProductClothesTShirt.objects.all()
    serializer_class = ProductTShirtSerializer


class ProductHoodieAPIView(generics.RetrieveAPIView):
    queryset = ProductClothesHoodie.objects.all()
    serializer_class = ProductHoodieSerializer
