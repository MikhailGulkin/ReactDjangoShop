from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, \
    SpectacularSwaggerView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),

    # djoser endpoints
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),

    path('users/', include('users.urls')),
    path('product/', include('product.urls')),
]
urlpatterns += [

    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    # Optional UI:
    path('swagger/',
         SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'),
         name='redoc'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
