from django.urls import path, include
from rest_framework import routers
from . views import *

route = routers.DefaultRouter()
route.register('attendence', AttendenceView)
route.register('freshers', FreshersView)
route.register('result_of_vote', VoteView)


urlpatterns = [
    path('api/', include(route.urls)),
]
