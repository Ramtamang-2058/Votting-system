from django.contrib import admin
from .models import Team, Organization, Hospital, Equipment

class TeamAdmin(admin.ModelAdmin):
    list_display=('full_name', 'province', 'member_type', 'position', 'primary_contact','is_approved')
    search_fields=('full_name', 'province', 'member_type', 'is_approved', 'position')
    readonly_fields=('created_date', 'edited_date')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('created_date',)

class OrganizationAdmin(admin.ModelAdmin):
    list_display=('title', 'contact_number', 'contact_email', 'contact_website', 'created_date')
    search_fields=('title', 'contact_website', 'contact_email', 'contact_number')
    readonly_fields=('created_date', 'edited_date')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('created_date',)


class HospitalAdmin(admin.ModelAdmin):
    list_display=('name', 'contact_number', 'contact_email', 'province', 'address', 'created_date')
    search_fields=('name', 'province', 'address', 'contact_number')
    readonly_fields=('created_date', 'edited_date')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('created_date',)

class EquipmentAdmin(admin.ModelAdmin):
    list_display=('hospital', 'equipment_type', 'model_number', 'unit', 'company_name', 'created_date')
    search_fields=('suppliers', 'remarks', 'hospital', 'equipment_type', 'model_number')
    readonly_fields=('created_date', 'edited_date')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('created_date',)


admin.site.register(Team, TeamAdmin)
admin.site.register(Organization, OrganizationAdmin)
admin.site.register(Hospital, HospitalAdmin)
admin.site.register(Equipment, EquipmentAdmin)

