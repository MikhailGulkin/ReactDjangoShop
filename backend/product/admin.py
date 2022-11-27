from django.contrib import admin
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin

from .models import ProductClothesTShirt, AlbumImageTShirts, ImageTShirts, \
    ProductClothesHoodie, AlbumImageHoodie, ImageHoodie


class ProductsArrayField(admin.ModelAdmin, DynamicArrayMixin):
    pass


def admin_register(name, *args): return admin.site.register(name, *args)


admin_register(ProductClothesTShirt, ProductsArrayField)
admin_register(AlbumImageTShirts)
admin_register(ImageTShirts)

admin_register(ProductClothesHoodie, ProductsArrayField)
admin_register(AlbumImageHoodie)
admin_register(ImageHoodie)
