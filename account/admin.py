from django.contrib import admin
from account.models import CustomUser
from voting.models import Voter, Position, Candidate, Votes
from import_export.admin import ImportExportModelAdmin
# Register your models here.


class VotersAdmin(ImportExportModelAdmin):
    list_display = ('email', 'created_at', 'updated_at')


class VoteAdmin(ImportExportModelAdmin):
    list_display = ('admin', 'phone', 'otp', 'verified', 'voted', 'present')
    search_fields = ('phone', 'voted')



class AdminPosition(admin.ModelAdmin):
    list_display = ('name', 'max_vote', 'priority')
    search_fields = ('name', 'max_vote')



class CandidateAdmin(admin.ModelAdmin):
    list_display = ('fullname', 'position', 'bio')
    search_fields = ('fullname', 'position')


class VotesAdmin(admin.ModelAdmin):
    list_display = ('voter', 'position', 'candidate')


admin.site.register(Voter, VoteAdmin)
admin.site.register(Candidate, CandidateAdmin)
admin.site.register(Position, AdminPosition)
admin.site.register(Votes, VotesAdmin)
admin.site.register(CustomUser, VotersAdmin)
