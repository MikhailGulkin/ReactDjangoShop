from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.filters import OrderingFilter, SearchFilter
from re import findall


class GetModelName:
    def name_clothes(self, directory: str) -> str:
        name_t_short = \
            self.album_images.get_queryset().first().clothes_image.name
        return findall(fr'{directory}/(.*)\.jpg', name_t_short)[0]


class BaseProductSettingsMixin:
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('title',)
    ordering_fields = ('totalPrice', 'title', )
