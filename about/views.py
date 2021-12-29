from rest_framework import viewsets
from .models import *
from . serializers import *

class AttendenceView(viewsets.ModelViewSet):
    queryset = Attendence.objects.all()
    serializer_class = AttendenceSerializer
    ordering = ['-id']


class FreshersView(viewsets.ModelViewSet):
    queryset = Freshers.objects.all()
    serializer_class = FreshersSerializer
    ordering = ['-id']


class VoteView(viewsets.ModelViewSet):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer
    ordering = ['-vote']