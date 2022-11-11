from django.urls import path
from .views import ProductListTShortAPIView

urlpatterns = [
    path("all-t_shorts", ProductListTShortAPIView.as_view(),
         name="t-shorts"),
]
