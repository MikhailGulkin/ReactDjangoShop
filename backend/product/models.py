from django.db import models
from django_better_admin_arrayfield.models.fields import ArrayField

from .mixins.services import GetModelName

size_clothes = [
    ('S', 'S'),
    ('M', 'M'),
    ('L', 'L'),
    ('XL', 'XL'),
    ('2XL', '2XL'),
    ('3XL', '3XL'),
]


class ImageTShirts(models.Model):
    clothes_image = models.ImageField(
        upload_to='T-Shirt',
    )

    def __str__(self):
        return self.clothes_image.name


class ImageHoodie(models.Model):
    clothes_image = models.ImageField(
        upload_to='Hoodie',
    )

    def __str__(self):
        return self.clothes_image.name


class AlbumImageTShirts(models.Model, GetModelName):
    album_images = models.ManyToManyField(ImageTShirts)
    color = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.color} - {self.name_clothes("T-Shirt")}'


class AlbumImageHoodie(models.Model, GetModelName):
    album_images = models.ManyToManyField(ImageHoodie)
    color = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.color} - {self.name_clothes("Hoodie")}'


class ProductClothesBase(models.Model):
    title = models.CharField(max_length=200, default='')

    price = models.FloatField(default=1)
    size = models.CharField(
        max_length=100,
        default='S',
        choices=size_clothes

    )
    discount = models.PositiveIntegerField(default=0)
    description = models.CharField(max_length=1000, default='')
    features = ArrayField(models.CharField(
        max_length=250),
        default=list)

    class Meta:
        abstract = True

    def __str__(self):
        return f'{self.title} - {self.pk}'


class ProductClothesTShirt(ProductClothesBase):
    clothes_images = models.ManyToManyField(
        AlbumImageTShirts,
    )


class ProductClothesHoodie(ProductClothesBase):
    clothes_images = models.ManyToManyField(
        AlbumImageHoodie,
    )
