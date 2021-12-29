from rest_framework import serializers
from .models import Attendence, Vote, Freshers


class AttendenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendence
        fields = '__all__'
        #     [
        #     'name',
        #     'faculty',
        #     'semester',
        #     'email',
        #     'phone',
        #     'address ',
        #     'created_date',
        #     'edited_date'
        # ]


class FreshersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Freshers
        fields = '__all__'



class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = '__all__'

