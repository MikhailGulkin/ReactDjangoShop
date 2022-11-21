from rest_framework import serializers
from .models import ProductClothesTShirt


class ProductTShirtSerializer(serializers.ModelSerializer):
    totalPrice = serializers.SerializerMethodField(read_only=True)
    albumImages = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = ProductClothesTShirt
        fields = (
            'pk',
            'title',
            'albumImages',
            'price',
            'discount',
            'totalPrice',
            'description',
            'features',
        )

    def get_totalPrice(self, obj):
        return obj.price * (1 - obj.discount / 100)

    def get_albumImages(self, obj):
        abs_url = self.context.get('request').build_absolute_uri
        if obj.clothes_images:
            all_album_objs = obj.clothes_images.all()
            return {
                album_obj.color: [
                    abs_url(image.clothes_image.url)
                    for image in album_obj.album_images.get_queryset()
                ] for album_obj in all_album_objs
            }
