from rest_framework import serializers
from .models import ProductClothesTShort
from .models import AlbumImageTShorts
from .models import ImageTShorts


class ProductTShortSerializer(serializers.ModelSerializer):
    total_price = serializers.SerializerMethodField(read_only=True)
    album_images = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = ProductClothesTShort
        fields = (
            'pk',
            'title',
            'album_images',
            'price',
            'discount',
            'total_price',
            'size',
            'description',
            'features',
        )

    def get_total_price(self, obj):
        return obj.price * (1 - obj.discount / 100)

    def get_album_images(self, obj):
        abs_url = self.context.get('request').build_absolute_uri
        if obj.clothes_images:
            all_album_objs = obj.clothes_images.all()
            return {
                album_obj.color: [
                    abs_url(image.clothes_image.url)
                    for image in album_obj.album_images.get_queryset()
                ] for album_obj in all_album_objs
            }
