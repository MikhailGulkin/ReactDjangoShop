from rest_framework import serializers
from .models import CustomUser


class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = CustomUser
        fields = '__all__'

