from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

def upload_about_picture(instance, filename):
    return "about/pictures/{id}_{host_to}/{filename}".format(host_to=instance.full_name, filename=filename, id=instance.id)

def upload_about_resume(instance, filename):
    return "about/resumes/{id}_{host_to}/{filename}".format(host_to=instance.full_name, filename=filename, id=instance.id)

def upload_about_organization_picture(instance, filename):
    return "about/pictures/{id}_{host_to}/{filename}".format(host_to=instance.title, filename=filename, id=instance.id)


class Team(models.Model):
    types = (
        ('L', 'Leads'),
        ('M', 'Members'),
    )
    member_type = models.CharField(max_length=1, choices=types, null=True, blank=True)
    # account_from = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField()
    province = models.CharField(max_length=255)
    profile_picture = models.ImageField(default='default.jpg', upload_to=upload_about_picture, max_length=1024, null=True, blank=True)
    full_name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    primary_contact = models.CharField(max_length=14)
    secondary_contact = models.CharField(max_length=14, null=True, blank=True)
    qualifications = models.CharField(max_length=1024)
    description = models.CharField(max_length=1000)
    resume = models.FileField(upload_to=upload_about_resume, null=True, blank=True)
    is_approved = models.BooleanField(default=False)
    province_np = models.CharField(max_length=255, null=True, blank=True)
    full_name_np = models.CharField(max_length=255, null=True, blank=True)
    position_np = models.CharField(max_length=255, null=True, blank=True)
    primary_contact_np = models.CharField(max_length=14, null=True, blank=True)
    secondary_contact_np = models.CharField(max_length=14, null=True, blank=True)
    qualifications_np = models.CharField(max_length=1024, null=True, blank=True)
    description_np = models.CharField(max_length=1000, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.full_name


class Organization(models.Model):
    title = models.CharField(max_length=255)
    logo = models.ImageField(upload_to=upload_about_organization_picture, max_length=1024, null=True, blank=True)
    description = models.CharField(max_length=255, null=True, blank=True)
    contact_number = models.CharField(max_length=14, null=True, blank=True)
    contact_email = models.CharField(max_length=255, null=True, blank=True)
    contact_website = models.CharField(max_length=255, null=True, blank=True)
    contact_social_media = models.CharField(max_length=1024, null=True, blank=True)
    title_np = models.CharField(max_length=255)
    description_np = models.CharField(max_length=255, null=True, blank=True)
    contact_number_np = models.CharField(max_length=14, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)