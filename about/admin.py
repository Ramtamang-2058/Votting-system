from django.contrib import admin
from .models import *

# class MemberTypeAdmin(admin.ModelAdmin):
#     list_display = ('name',)
#     search_fields = ('name',)
#
#     filter_horizontal = ()
#     list_filter = ()
#     fieldsets = ()
#     ordering = ('name',)

admin.site.register(Attendence)
admin.site.register(Freshers)
admin.site.register(Vote)
