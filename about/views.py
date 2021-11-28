from django.shortcuts import render
from .serializers import (TeamSerializer,
                        PostTeamSerializer,
                        GetOrganizationSerializer,
                        GetOrganizationNepaliSerializer,
                        TeamNepaliSerializer,
                        HospitalEnglishSerializer,
                        HospitalNepaliSerializer,
                        EquipmentEnglishSerializer,
                        EquipmentNepaliSerializer,
                        ResourceEnglishSerializer,
                        ResourceNepaliSerializer,
                        AchievementEnglishSerializer,
                        AchievementNepaliSerializer,
                        SolveEnglishSerializer,
                        SolveNepaliSerializer
                        )
from rest_framework import viewsets
from .models import Team, Organization, Hospital, Equipment, Resource, Achievement, Solve
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny

class TeamLeadsView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True, member_type='T')
    serializer_class = TeamSerializer
    ordering = ['-id']

class TeamMembersView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True).exclude(member_type='T')
    serializer_class = TeamSerializer
    ordering = ['-id']

class TeamLeadsNepaliView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True, member_type='T')
    serializer_class = TeamNepaliSerializer
    ordering = ['-id']

class TeamMembersNepaliView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True).exclude(member_type='T')
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
    ordering = ['province']

class HospitalNepaliView(viewsets.ModelViewSet):
    queryset = Hospital.objects.all()
    serializer_class = HospitalNepaliSerializer
    ordering = ['province']


class EquipmentEnglishView(viewsets.ModelViewSet):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentEnglishSerializer
    ordering = ['-id']


class EquipmentNepaliView(viewsets.ModelViewSet):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentNepaliSerializer
    ordering = ['-id']
    

class ResourceEnglishView(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceEnglishSerializer
    ordering = ['-id']
    

class ResourceNepaliView(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceNepaliSerializer
    ordering = ['-id']
    
class AchievementNepaliView(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementNepaliSerializer

    ordering = ['-id']

class AchievementEnglishView(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementEnglishSerializer

    ordering = ['-id']  


class SolveEnglishView(viewsets.ModelViewSet):
    queryset = Solve.objects.all()
    serializer_class = SolveEnglishSerializer

    ordering = ['-id']  

class SolveNepaliView(viewsets.ModelViewSet):
    queryset = Solve.objects.all()
    serializer_class = SolveNepaliSerializer

    ordering = ['-id']  



