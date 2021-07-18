from django.urls import path, include
from rest_framework import routers
from .views import (TeamLeadsView,
                    TeamMembersView,
                    TeamView,
                    OrganizationView,
                    TeamLeadsNepaliView,
                    TeamMembersNepaliView,
                    OrganizationNepaliView,
                    HospitalEnglishView,
                    HospitalNepaliView,
                    EquipmentEnglishView,
                    EquipmentNepaliView)

route = routers.DefaultRouter()
route.register('post_members', TeamView)
route.register('get_team_leads/en', TeamLeadsView)
route.register('get_team_members/en', TeamMembersView)
route.register('get_organization/en', OrganizationView)
route.register('get_team_leads/np', TeamLeadsNepaliView)
route.register('get_team_members/np', TeamMembersNepaliView)
route.register('get_organization/np', OrganizationNepaliView)
route.register('hospital/en', HospitalEnglishView)
route.register('hospital/np', HospitalNepaliView)
route.register('equipment/en', EquipmentEnglishView)
route.register('equipment/np', EquipmentNepaliView)



urlpatterns = [
    path('api/', include(route.urls)),
]

