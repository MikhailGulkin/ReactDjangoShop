from rest_framework.test import APITestCase
from rest_framework import status
from .models import ProductClothesHoodie, ProductClothesTShirt
from .serializers import ProductHoodieSerializer, ProductTShirtSerializer
from django.urls import reverse


class ProductTshirtTestCase(APITestCase):
    all_t_shirts_url = reverse('t-shirts')

    def setUp(self):
        self.obj_1 = ProductClothesTShirt.objects.create(
            title='Test TShirt',
            price=45,
            discount=0,
            description='Test desc',
        )
        self.obj_2 = ProductClothesTShirt.objects.create(
            title='Test TShirt_1',
            price=45,
            discount=0,
            description='Test desc',
        )

    def test_all_t_shirts(self):
        response = self.client.get(self.all_t_shirts_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        resp_json = response.json()['results']

        self.assertEqual(resp_json[0], ProductTShirtSerializer(self.obj_1).data)
        self.assertEqual(resp_json[1], ProductTShirtSerializer(self.obj_2).data)

    def test_t_shirt(self):
        t_shirt_url = reverse('t-shirt', args=[self.obj_2.pk, ])

        response = self.client.get(t_shirt_url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            response.data,
            ProductTShirtSerializer(self.obj_2).data
        )


class ProductHoodieTestCase(APITestCase):
    all_hoodie_url = reverse('hoodies')

    def setUp(self):
        self.obj_1 = ProductClothesHoodie.objects.create(
            title='Test Hoodie',
            price=45,
            discount=0,
            description='Test desc',
        )
        self.obj_2 = ProductClothesHoodie.objects.create(
            title='Test Hoodie_1',
            price=45,
            discount=0,
            description='Test desc',
        )

    def test_all_hoodies(self):
        response = self.client.get(self.all_hoodie_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        resp_json = response.json()['results']

        self.assertEqual(resp_json[0], ProductHoodieSerializer(self.obj_1).data)
        self.assertEqual(resp_json[1], ProductHoodieSerializer(self.obj_2).data)

    def test_hoodie(self):
        hoodie_url = reverse('hoodie', args=[self.obj_2.pk, ])

        response = self.client.get(hoodie_url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            response.data,
            ProductHoodieSerializer(self.obj_2).data
        )