from django.shortcuts import render
from .serializers import TeamSerializer, PostTeamSerializer, GetOrganizationSerializer,GetOrganizationNepaliSerializer,TeamNepaliSerializer
from rest_framework import viewsets
from .models import Team, Organization
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny

class TeamLeadsView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True, member_type='L')
    serializer_class = TeamSerializer

class TeamMembersView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True, member_type='M')
    serializer_class = TeamSerializer

class TeamLeadsNepaliView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True, member_type='L')
    serializer_class = TeamNepaliSerializer

class TeamMembersNepaliView(viewsets.ModelViewSet):
    queryset = Team.objects.filter(is_approved=True, member_type='M')
    serializer_class = TeamNepaliSerializer

class TeamView(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = PostTeamSerializer

class OrganizationView(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = GetOrganizationSerializer

class OrganizationNepaliView(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = GetOrganizationNepaliSerializer


