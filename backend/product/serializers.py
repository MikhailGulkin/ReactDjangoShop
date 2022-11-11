from rest_framework import serializers
from .models import ProductClothesTShort


class ProductTShortSerializer(serializers.ModelSerializer):
    total_price = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = ProductClothesTShort
        fields = (
            'pk',
            'title',
            'clothes_image',
            'price',
            'discount',
            'total_price',
            'size',
            'description',
            'features',
        )

    def get_total_price(self, obj):
        return obj.price * (1 - obj.discount / 100)
