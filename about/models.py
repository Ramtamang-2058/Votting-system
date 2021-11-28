from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


def upload_about_picture(instance, filename):
    return "about/pictures/{id}_{host_to}/{filename}".format(host_to=instance.full_name, filename=filename, id=instance.id)

def upload_about_resume(instance, filename):
    return "about/resumes/{id}_{host_to}/{filename}".format(host_to=instance.full_name, filename=filename, id=instance.id)

def upload_about_organization_picture(instance, filename):
    return "about/pictures/{id}_{host_to}/{filename}".format(host_to=instance.title, filename=filename, id=instance.id)


def upload_resources_image(instance, filename):
    return "about/resources/{id}_{host_to}/{filename}".format(host_to=instance.title, filename=filename, id=instance.id)

def upload_solve_files(instance, filename):
    return "about/solve/{id}/{filename}".format(filename=filename, id=instance.id)




class Team(models.Model):
    types = (
        ('L', 'Leads'),
        ('M', 'Members'),
        ('T', 'Management')
    )

    lead_types_options= (
        ('P', 'Provincial Lead'),
        ('T', 'Team Lead')
    )
    member_type = models.CharField(max_length=1, choices=types, null=True, blank=True)
    # account_from = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField()
    lead_type = models.CharField(max_length=1,default='P', choices=lead_types_options, null=True, blank=True)
    province = models.CharField(max_length=255)
    profile_picture = models.ImageField(upload_to=upload_about_picture, null=True, blank=True)
    full_name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    primary_contact = models.CharField(max_length=14, null=True, blank=True)
    secondary_contact = models.CharField(max_length=14, null=True, blank=True)
    qualifications = models.CharField(max_length=1024)
    description = models.CharField(max_length=1024)
    resume = models.FileField(upload_to=upload_about_resume, null=True, blank=True)
    is_approved = models.BooleanField(default=False)
    province_np = models.CharField(max_length=255, null=True, blank=True)
    full_name_np = models.CharField(max_length=255, null=True, blank=True)
    position_np = models.CharField(max_length=255, null=True, blank=True)
    primary_contact_np = models.CharField(max_length=14, null=True, blank=True)
    secondary_contact_np = models.CharField(max_length=14, null=True, blank=True)
    qualifications_np = models.CharField(max_length=1024, null=True, blank=True)
    description_np = models.CharField(max_length=1024, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.full_name


class Organization(models.Model):
    category_type = (
    ('L', 'Leading'),
    ('S', 'Support'),
    ('C', 'Co-Support'),
    )
    title = models.CharField(max_length=255)
    logo = models.ImageField(upload_to=upload_about_organization_picture, null=True, blank=True)
    category = models.CharField(max_length=2, choices=category_type, default='C', null=True, blank=True)
    description = models.CharField(max_length=1024, null=True, blank=True)
    contact_number = models.CharField(max_length=14, null=True, blank=True)
    contact_email = models.CharField(max_length=255, null=True, blank=True)
    contact_website = models.CharField(max_length=255, null=True, blank=True)
    contact_social_media = models.CharField(max_length=1024, null=True, blank=True)
    title_np = models.CharField(max_length=255)
    description_np = models.CharField(max_length=1024, null=True, blank=True)
    contact_number_np = models.CharField(max_length=14, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title


class Province(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class District(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    province = models.ForeignKey('Province', related_name='district',
                                 on_delete=models.CASCADE)

    def __str__(self):
        return str(self.name)


class Municipality(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    province = models.ForeignKey('Province', related_name='municipality',
                                 on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey('District', related_name='municipality',
                                 on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural  = "Municipalities"


    def __str__(self):
        return self.name

class Ward(models.Model):
    name = models.CharField(max_length=50)
    province = models.ForeignKey('Province', related_name='ward',
                                 on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey('District', related_name='ward',
                                 on_delete=models.CASCADE)
    municipality = models.ForeignKey('Municipality', related_name='ward',
                                     on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Hospital(models.Model):
    name = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=255, null=True, blank=True)
    contact_email = models.CharField(max_length=255, null=True, blank=True)
    province = models.ForeignKey('Province', related_name='hospital',
                                 on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey('District', related_name='hospital',
                                 on_delete=models.CASCADE, blank=True, null=True)
    municipality = models.ForeignKey('Municipality', related_name='hospital',
                                     on_delete=models.CASCADE, blank=True, null=True)
    ward = models.ForeignKey('Ward', related_name='hospital',
                                     on_delete=models.CASCADE, blank=True, null=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    name_np = models.CharField(max_length=255, null=True, blank=True)
    contact_number_np = models.CharField(max_length=255, null=True, blank=True)
    contact_email_np = models.CharField(max_length=255, null=True, blank=True)
    province_np = models.CharField(max_length=255, null=True, blank=True)
    address_np = models.CharField(max_length=255, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name 

class Equipment(models.Model):
    STATUS_CHOICES = (
    ("Operational", "Operational"),
    ("Not Operational", "Not Operational"),
    ("In Maintenance", "In Maintenance"),
)
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE, related_name='equipments')
    equipment_type = models.CharField(max_length=255)
    unit = models.IntegerField(null=True, blank=True)
    model_number = models.CharField(max_length=255, null=True, blank=True)
    company_name = models.CharField(max_length=255, null=True, blank=True)
    suppliers = models.CharField(max_length=255, null=True, blank=True)
    remarks = models.CharField(max_length=255, null=True, blank=True)
    equipment_type_np = models.CharField(max_length=255, null=True, blank=True)
    unit_np = models.IntegerField(null=True, blank=True)
    model_number_np = models.CharField(max_length=255, null=True, blank=True)
    company_name_np = models.CharField(max_length=255, null=True, blank=True)
    suppliers_np = models.CharField(max_length=255, null=True, blank=True)
    remarks_np = models.CharField(max_length=255, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)
    eqiupment_status = models.CharField(max_length=255, null=True, blank=True,choices = STATUS_CHOICES)

    def __str__(self):
        return self.equipment_type 


class Resource(models.Model):
    category_type = (
        ('AN', 'announcement'),
        ('NE', 'news'),
        ('VI', 'videos'),
        ('AR', 'articals'),
    )
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=2, choices=category_type, null=True, blank=True)
    content = models.CharField(max_length=1024, null=True, blank=True)
    video_link = models.CharField(max_length=1024, null=True, blank=True)
    slug = models.CharField(max_length=1024, null=True, blank=True)
    image = models.ImageField(default='default.jpg', upload_to=upload_resources_image, max_length=1024, null=True, blank=True)
    summary = models.CharField(max_length=255, null=True, blank=True)
    title_np = models.CharField(max_length=255, null=True, blank=True)
    content_np = models.CharField(max_length=1024, null=True, blank=True)
    slug_np = models.CharField(max_length=1024, null=True, blank=True)
    summary_np = models.CharField(max_length=255, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Achievement(models.Model):
    title = models.CharField(max_length=255)
    number = models.IntegerField()
    title_np = models.CharField(max_length=255, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
        
        
class Solve(models.Model):
    request_from = models.CharField(max_length=1024)
    request_for = models.CharField(max_length=1024)
    support_provided = models.CharField(max_length=1024)
    details = models.CharField(max_length=1024)
    request_from_np = models.CharField(max_length=1024, null=True, blank=True)
    request_for_np = models.CharField(max_length=1024, null=True, blank=True)
    support_provided_np = models.CharField(max_length=1024, null=True, blank=True)
    details_np = models.CharField(max_length=1024, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to=upload_solve_files, null=True, blank=True)
    document = models.CharField(max_length=1024, null=True, blank=True)
