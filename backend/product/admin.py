from django.contrib import admin
from .models import ProductClothesTShirt, AlbumImageTShirts, ImageTShirts, \
    ProductClothesHoodie, AlbumImageHoodie, ImageHoodie


def admin_register(name): return admin.site.register(name)


admin_register(ProductClothesTShirt)
admin_register(AlbumImageTShirts)
admin_register(ImageTShirts)

admin_register(ProductClothesHoodie)
admin_register(AlbumImageHoodie)
admin_register(ImageHoodie)

