from django.contrib import admin
from .models import Team, Organization, Hospital, Equipment, Resource, Achievement,Province, District, Municipality, Ward, Solve

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
    list_display=('name', 'contact_number', 'contact_email', 'province','district','municipality','ward','address', 'created_date')
    search_fields=('name', 'province', 'address', 'contact_number')
    readonly_fields=('created_date', 'edited_date')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('created_date',)

class EquipmentAdmin(admin.ModelAdmin):
    list_display=('hospital', 'equipment_type','eqiupment_status', 'model_number', 'unit', 'company_name', 'created_date')
    search_fields=('suppliers', 'remarks', 'hospital', 'equipment_type', 'model_number')
    readonly_fields=('created_date', 'edited_date')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('created_date',)

class ResourcesAdmin(admin.ModelAdmin):
    list_display=('author', 'title', 'category', 'created_date')
    search_fields=('author', 'title', 'category')
    readonly_fields=('created_date', 'edited_date')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('created_date',)

class AchievementAdmin(admin.ModelAdmin):
    list_display=('title', 'number')
    search_fields=('title',)
    readonly_fields=('created_date', 'edited_date')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('created_date',)

class ProvinceAdmin(admin.ModelAdmin):
    list_display=('name',)
    search_fields=('name',)

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('name',)

class DistrictAdmin(admin.ModelAdmin):
    list_display=('name','province')
    search_fields=('name','province')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('name',)


class MunicipalityAdmin(admin.ModelAdmin):
    list_display=('name','province','district')
    search_fields=('name','province','district')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('name',)

class WardAdmin(admin.ModelAdmin):
    list_display=('name','province','district','municipality')
    search_fields=('name','province','district','municipality')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('name',)


class SolveAdmin(admin.ModelAdmin):
    list_display=('request_from', 'request_for', 'created_date', 'edited_date')
    search_fields=('request_from', 'request_for')
    readonly_fields=('created_date', 'edited_date')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
    ordering=('created_date',)







admin.site.register(Team, TeamAdmin)
admin.site.register(Organization, OrganizationAdmin)
admin.site.register(Hospital, HospitalAdmin)
admin.site.register(Equipment, EquipmentAdmin)
admin.site.register(Resource, ResourcesAdmin)
admin.site.register(Achievement, AchievementAdmin)
admin.site.register(Province, ProvinceAdmin)
admin.site.register(District, DistrictAdmin)
admin.site.register(Municipality, MunicipalityAdmin)
admin.site.register(Ward, WardAdmin)
admin.site.register(Solve, SolveAdmin)


