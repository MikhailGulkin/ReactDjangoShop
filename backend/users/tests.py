import logging

from rest_framework.test import APITestCase
from rest_framework import status

from django.urls import reverse


class UserProfileTestCase(APITestCase):
    profile_list_url = reverse('all-profiles')

    def setUp(self):
        # создайте нового пользователя, отправив запрос к конечной точке djoser
        self.user = self.client.post(
            '/auth/users/', data={
                'email': 'test@mail.com',
                'password': 'testtesttest',
                'first_name': 'test_first',
                'last_name': 'test_second',
            })

        # получить веб-токен JSON для вновь созданного пользователя
        response = self.client.post('/auth/jwt/create/',
                                    data={
                                        'email': 'test@mail.com',
                                        'password': 'testtesttest',
                                        'first_name': 'test_first',
                                        'last_name': 'test_second',
                                    })
        self.token = response.data['access']
        self.api_authentication()
        # self.login()

    def api_authentication(self):
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.token)

    def login(self):
        response = self.client.post('/auth/users/login/',
                                    data={
                                        'email': 'test@mail.com',
                                        'password': 'testtesttest',
                                    })
        logging.getLogger().error(response.data)

    # получить список всех профилей пользователей во время аутентификации пользователя запроса
    def test_userprofile_list_authenticated(self):
        response = self.client.get(self.profile_list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # получить список всех профилей пользователей, пока запрос пользователя не прошел проверку подлинности
    def test_userprofile_list_unauthenticated(self):
        self.client.force_authenticate(user=None)
        response = self.client.get(self.profile_list_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    # проверьте, чтобы получить данные профиля аутентифицированного пользователя
    def test_userprofile_detail_retrieve(self):
        response = self.client.get(reverse('profile', kwargs={'pk': 1}))
        # print(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # заполнить профиль пользователя, который был автоматически создан с использованием сигналов
    def test_userprofile_profile(self):
        profile_data = {'first_name': 'I\'m try get all test\'s'}
        response = self.client.put(reverse('profile', kwargs={'pk': 1}),
                                   data=profile_data)
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
