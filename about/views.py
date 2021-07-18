from django.shortcuts import render
from .serializers import (TeamSerializer,
                        PostTeamSerializer,
                        GetOrganizationSerializer,
                        GetOrganizationNepaliSerializer,
                        TeamNepaliSerializer,
                        HospitalEnglishSerializer,
                        HospitalNepaliSerializer,
                        EquipmentEnglishSerializer,
                        EquipmentNepaliSerializer
                        )
from rest_framework import viewsets
from .models import Team, Organization, Hospital, Equipment
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny

class TeamLeadsView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True, member_type='L')
    serializer_class = TeamSerializer
    ordering = ['-id']

class TeamMembersView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True, member_type='M')
    serializer_class = TeamSerializer
    ordering = ['-id']

class TeamLeadsNepaliView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True, member_type='L')
    serializer_class = TeamNepaliSerializer
    ordering = ['-id']

class TeamMembersNepaliView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True, member_type='M')
    serializer_class = TeamNepaliSerializer
    ordering = ['-id']

class TeamView(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = PostTeamSerializer
    ordering = ['-id']

class OrganizationView(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = GetOrganizationSerializer
    ordering = ['-id']

class OrganizationNepaliView(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = GetOrganizationNepaliSerializer
    ordering = ['-id']

class HospitalEnglishView(viewsets.ModelViewSet):
    queryset = Hospital.objects.all()
    serializer_class = HospitalEnglishSerializer
    ordering = ['-id']

class HospitalNepaliView(viewsets.ModelViewSet):
    queryset = Hospital.objects.all()
    serializer_class = HospitalNepaliSerializer
    ordering = ['-id']


class EquipmentEnglishView(viewsets.ModelViewSet):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentEnglishSerializer
    ordering = ['-id']


class EquipmentNepaliView(viewsets.ModelViewSet):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentNepaliSerializer
    ordering = ['-id']
    




