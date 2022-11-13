from rest_framework import generics
from .models import StaffPerson
from .serializers import StaffSerializers
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class StaffListAPIView(generics.ListAPIView):
    queryset = StaffPerson.objects.all()
    serializer_class = StaffSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]
