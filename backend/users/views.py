# from rest_framework.generics import (
#     ListCreateAPIView,
#     RetrieveUpdateDestroyAPIView,
# )
# from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
# from rest_framework.permissions import IsAuthenticated
# from .models import CustomUser
# from .permissions import IsOwnerProfileOrReadOnly
# from .serializers import UserProfileSerializer
#
#
# class UserProfileListCreateView(ListCreateAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsAuthenticated]
#
#     def perform_create(self, serializer):
#         user = self.request.user
#         serializer.save(user=user)
#
#
# class UserProfileDetailView(RetrieveUpdateDestroyAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsOwnerProfileOrReadOnly, IsAuthenticated]
#     authentication_classes = [JWTTokenUserAuthentication, ]
