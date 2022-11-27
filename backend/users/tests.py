from rest_framework.test import APITestCase
from rest_framework import status
from .models import CustomUser


class UserProfileTestCase(APITestCase):

    def setUp(self):
        self.user = self.client.post(
            '/auth/users/',
            data={
                'email': 'test@mail.com',
                'password': 'testtesttest',
                're_password': 'testtesttest',
                'first_name': 'test_first',
                'last_name': 'test_second',
            })
        obj = CustomUser.objects.get(pk=self.user.data['id'])
        obj.is_active = True
        obj.save()

        self.jwt = self.client.post(
            '/auth/jwt/create/',
            data={
                'email': 'test@mail.com',
                'password': 'testtesttest',
            })

    def test_user_creation(self):
        self.assertEqual(self.user.status_code, status.HTTP_201_CREATED)

    def test_get_jwt(self):
        self.assertEqual(self.jwt.status_code, status.HTTP_200_OK)

    def test_refresh_jwt(self):
        response = self.client.post(
            '/auth/jwt/refresh/',
            data={
                'refresh': self.jwt.data['refresh']
            })
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_verify_jwt(self):
        response = self.client.post(
            '/auth/jwt/verify/',
            data={
                'token': self.jwt.data['access']
            })
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_user(self):
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.jwt.data["access"]}')
        response = self.client.get(
            '/auth/users/me/',
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
