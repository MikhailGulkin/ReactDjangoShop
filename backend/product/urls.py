from django.urls import path
from .views import ProductsListTShortAPIView, ProductTShortAPIView

urlpatterns = [
    path("all-t_shorts/", ProductsListTShortAPIView.as_view(),
         name="t-shorts"),
    path('t_short/<int:pk>/', ProductTShortAPIView.as_view(),
         name='t-short')
]
