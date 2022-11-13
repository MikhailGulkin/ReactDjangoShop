from django.db import models
from django.contrib.postgres.fields import ArrayField
from re import findall
size_clothes = [
    ('S', 'S'),
    ('M', 'M'),
    ('L', 'L'),
    ('XL', 'XL'),
    ('2XL', '2XL'),
    ('3XL', '3XL'),
]


class ImageTShorts(models.Model):
    clothes_image = models.ImageField(
        upload_to='T-Short',
    )
    def __str__(self):
        return self.clothes_image.name


class AlbumImageTShorts(models.Model):
    album_images = models.ManyToManyField(ImageTShorts)
    color = models.CharField(max_length=100)

    def __str__(self):
        name_t_short = self.album_images.get_queryset().first().clothes_image.name
        name_t_short = findall(r'T-Short/(.*)\.jpg', name_t_short)
        return f'{self.color} - {name_t_short[0]}'


class ProductClothesTShort(models.Model):
    title = models.CharField(max_length=200, default='')
    clothes_images = models.ManyToManyField(
        AlbumImageTShorts,
        null=True
    )
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
        default=list
    )

    def __str__(self):
        return f'{self.title} - {self.pk}'
