from django.db import models

staff_positions = [
    ('Designer', 'Designer'),
    ('Director', 'Director'),
    ('Vice President', 'Vice President'),
    ('Top Manager', 'Top Manager'),
]


class StaffPerson(models.Model):
    first_name = models.CharField(max_length=150)
    second_name = models.CharField(max_length=150)
    person_image = models.ImageField(upload_to='Staff')
    position = models.CharField(default='Designer', choices=staff_positions,
                                max_length=200)

    link_to_twitter = models.CharField(max_length=200)
    link_to_qiscus = models.CharField(max_length=200)
    link_to_facebook = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.first_name} {self.second_name}; {self.position}'
