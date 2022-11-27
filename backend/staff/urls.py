from django.urls import path
from .views import StaffListAPIView

urlpatterns = [
    path("all-staff", StaffListAPIView.as_view(),
         name="staffs"),
]
