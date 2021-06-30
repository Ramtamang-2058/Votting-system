from rest_framework import serializers
from .models import Team, Organization


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

