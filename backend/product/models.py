from django.db import models
from django.contrib.postgres.fields import ArrayField

size_clothes = [
    ('S', 'S'),
    ('M', 'M'),
    ('L', 'L'),
    ('XL', 'XL'),
    ('2XL', '2XL'),
    ('3XL', '3XL'),
]


class ProductClothesTShort(models.Model):
    title = models.CharField(max_length=200, default='')
    clothes_image = models.ImageField(upload_to='T-Short')
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
        default=['Some', ]
    )

    def __str__(self):
        return f'{self.title}'
