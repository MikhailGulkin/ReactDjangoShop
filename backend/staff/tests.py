from rest_framework.test import APITestCase
from rest_framework import status
from .models import StaffPerson
from .serializers import StaffSerializers
from django.urls import reverse


class AllStaffTestCase(APITestCase):
    staff_list_url = reverse('staffs')

    def setUp(self):
        StaffPerson.objects.create(
            first_name='Test',
            second_name='Test',
        )

    def test_all_staff_endpoint(self):
        response = self.client.get(self.staff_list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertEqual(
            StaffSerializers(StaffPerson.objects.get(pk=1)).data,
            response.json()['results'][0]
        )
