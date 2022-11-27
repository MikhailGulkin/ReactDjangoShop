from rest_framework import serializers
from .models import ProductClothesTShirt, ProductClothesHoodie


class BaseProductSerializer(serializers.ModelSerializer):
    totalPrice = serializers.SerializerMethodField(read_only=True)
    albumImages = serializers.SerializerMethodField(read_only=True)

    class Meta:
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
        if self.context.get('request'):
            abs_url = self.context.get('request').build_absolute_uri
            if obj.clothes_images:
                all_album_objs = obj.clothes_images.all()
                return {
                    album_obj.color: [
                        abs_url(image.clothes_image.url)
                        for image in album_obj.album_images.get_queryset()
                    ] for album_obj in all_album_objs
                }
        return {}


class ProductTShirtSerializer(BaseProductSerializer):
    type = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = ProductClothesTShirt
        fields = (*BaseProductSerializer.Meta.fields, 'type')

    def get_type(self, obj):
        return 'TShirt'


class ProductHoodieSerializer(BaseProductSerializer):
    type = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = ProductClothesHoodie
        fields = (*BaseProductSerializer.Meta.fields, 'type')

    def get_type(self, obj):
        return 'Hoodie'
