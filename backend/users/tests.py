import logging

from rest_framework.test import APITestCase
from rest_framework import status

from django.urls import reverse


class UserProfileTestCase(APITestCase):
    profile_list_url = reverse('all-profiles')

    def setUp(self):
        self.client.post(
            '/auth/users/', data={
                'email': 'test@mail.com',
                'password': 'testtesttest',
                'first_name': 'test_first',
                'last_name': 'test_second',
            })

        response = self.client.post('/auth/jwt/create/',
                                    data={
                                        'email': 'test@mail.com',
                                        'password': 'testtesttest',
                                        'first_name': 'test_first',
                                        'last_name': 'test_second',
                                    })
        self.token = response.data['access']
        self.api_authentication()

    def api_authentication(self):
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.token)


    def test_userprofile_list_authenticated(self):
        response = self.client.get(self.profile_list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_userprofile_list_unauthenticated(self):
        self.client.force_authenticate(user=None)
        response = self.client.get(self.profile_list_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_userprofile_detail_retrieve(self):
        response = self.client.get(reverse('profile', kwargs={'pk': 1}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
