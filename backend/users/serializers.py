from rest_framework import serializers
from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer


class UserCreateSerializers(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = get_user_model()
        fields = ('id', 'email', 'first_name', 'last_name',)


# class UserProfileSerializer(serializers.ModelSerializer):
#     user = serializers.StringRelatedField(read_only=True)
#
#     class Meta:
#         model = get_user_model()
#         fields = '__all__'
