from rest_framework import serializers
from .models import Team, Organization, Hospital, Equipment, Resource


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = [
            'id',
            'member_type',
            'email',
            'province',
            'profile_picture',
            'full_name',
            'position',
            'primary_contact',
            'secondary_contact',
            'qualifications',
            'description',
            'resume',
            'is_approved',
            'created_date',
            'edited_date',
        ]

class PostTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = [
            'id',
            'province',
            'email',
            'profile_picture',
            'full_name',
            'position',
            'primary_contact',
            'secondary_contact',
            'qualifications',
            'description',
            'resume',
        ]

class GetOrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = [
            'id',
            'title',
            'logo',
            'description',
            'category',
            'contact_number',
            'contact_email',
            'contact_website',
            'contact_social_media',
            'created_date',
            'edited_date',
        ]

class GetOrganizationNepaliSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='title_np')
    description = serializers.CharField(source='description_np')
    contact_number = serializers.CharField(source='contact_number_np')

    class Meta:
        model = Organization
        fields = [
            'id',
            'title',
            'logo',
            'description',
            'category',
            'contact_number',
            'contact_email',
            'contact_website',
            'contact_social_media',
            'created_date',
            'edited_date',
        ]

class TeamNepaliSerializer(serializers.ModelSerializer):
    province = serializers.CharField(source='province_np')
    full_name = serializers.CharField(source='full_name_np')
    position = serializers.CharField(source='position_np')
    primary_contact = serializers.CharField(source='primary_contact_np')
    secondary_contact = serializers.CharField(source='secondary_contact_np')
    qualifications = serializers.CharField(source='qualifications_np')
    description = serializers.CharField(source='description_np')


    class Meta:
        model = Team
        fields = [
            'id',
            'member_type',
            'email',
            'province',
            'profile_picture',
            'full_name',
            'position',
            'primary_contact',
            'secondary_contact',
            'qualifications',
            'description',
            'resume',
            'is_approved',
            'created_date',
            'edited_date',
        ]

class HospitalEnglishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = [
            'id',
            'name',
            'contact_number',
            'contact_email',
            'province',
            'address',
            'created_date',
            'edited_date'
        ]

class HospitalNepaliSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='name_np')
    contact_number = serializers.CharField(source='contact_number_np')
    contact_email = serializers.CharField(source='contact_email_np')
    province = serializers.CharField(source='province_np')
    address = serializers.CharField(source='address_np')

    class Meta:
        model = Hospital
        fields = [
            'id',
            'name',
            'contact_number',
            'contact_email',
            'province',
            'address',
            'created_date',
            'edited_date'
        ]


class EquipmentEnglishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = [
            'id',
            'hospital',
            'equipment_type',
            'unit',
            'model_number',
            'company_name',
            'suppliers',
            'remarks',
            'created_date',
            'edited_date'
        ]

class EquipmentNepaliSerializer(serializers.ModelSerializer):
    equipment_type = serializers.CharField(source='equipment_type_np')
    unit = serializers.CharField(source='unit_np')
    company_name = serializers.CharField(source='company_name_np')
    suppliers = serializers.CharField(source='suppliers_np')
    remarks = serializers.CharField(source='remarks_np')
    model_number = serializers.CharField(source='model_number_np')

    class Meta:
        model = Equipment
        fields = [
            'id',
            'hospital',
            'equipment_type',
            'unit',
            'model_number',
            'company_name',
            'suppliers',
            'remarks',
            'created_date',
            'edited_date'
        ]

class ResourceEnglishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = [
            'id',
            'author',
            'title',
            'category',
            'category',
            'content',
            'video_link',
            'slug',
            'image',
            'summary',
            'created_date',
            'edited_date'
        ]


class ResourceNepaliSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='title_np')
    category = serializers.CharField(source='category_np')
    content = serializers.CharField(source='content_np')
    slug = serializers.CharField(source='slug_np')
    summary = serializers.CharField(source='summary_np')

    class Meta:
        model = Resource
        fields = [
            'id',
            'author',
            'title',
            'category',
            'category',
            'content',
            'video_link',
            'slug',
            'image',
            'summary',
            'created_date',
            'edited_date'
        ]
















