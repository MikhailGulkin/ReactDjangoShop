from django.urls import path
from .views import ProductsListTShirtAPIView, ProductTShirtAPIView

urlpatterns = [
    path("all-t_shorts/", ProductsListTShirtAPIView.as_view(),
         name="t-shorts"),
    path('t_short/<int:pk>/', ProductTShirtAPIView.as_view(),
         name='t-short')
]
