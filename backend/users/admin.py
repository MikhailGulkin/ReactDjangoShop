from rest_framework_simplejwt.token_blacklist.admin import \
    OutstandingTokenAdmin
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken

from django.contrib import admin

from .models import CustomUser



# Overloading perms for delete toke-user
class _OutstandingTokenAdmin(OutstandingTokenAdmin):

    def has_delete_permission(self, *args, **kwargs):
        return True


admin.site.unregister(OutstandingToken)
admin.site.register(OutstandingToken,
                    _OutstandingTokenAdmin)

admin.site.register(CustomUser)
