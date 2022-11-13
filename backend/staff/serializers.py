from rest_framework import serializers
from .models import StaffPerson


class StaffSerializers(serializers.ModelSerializer):
    class Meta:
        model = StaffPerson
        fields = (
            'pk',
            'first_name',
            'second_name',
            'person_image',
            'position',
            'link_to_twitter',
            'link_to_qiscus',
            'link_to_facebook',
        )
