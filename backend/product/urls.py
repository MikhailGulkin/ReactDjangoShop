from django.urls import path
from .views import ProductsListTShirtAPIView, ProductTShirtAPIView, \
    ProductsListHoodieAPIView, ProductHoodieAPIView

urlpatterns = [
    path("all-t_shirts/", ProductsListTShirtAPIView.as_view(),
         name="t-shirts"),
    path('t_shirt/<int:pk>/', ProductTShirtAPIView.as_view(),
         name='t-shirt'),
    path("all-hoodies/", ProductsListHoodieAPIView.as_view(),
         name="hoodies"),
    path('hoodie/<int:pk>/', ProductHoodieAPIView.as_view(),
         name='hoodie'),

]
