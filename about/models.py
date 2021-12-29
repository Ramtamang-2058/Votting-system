from django.db import models

class Attendence(models.Model):
    semster = (
        ('2-semester', '2-semester'),
        ('5-semester', '5-semester'),
        ('7-semester', '7-semester'),
        ('master', 'master')
    )
    faculty = (
        ('MBA', 'MBA'),
        ('BICT', 'BICT')
    )
    name = models.CharField(max_length=255)
    faculty = models.CharField(max_length=255, choices=faculty)
    semester = models.CharField(max_length=255, choices=semster)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=50)
    address = models.CharField(max_length=300, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Freshers(models.Model):
    gender = (
        ('male', 'male'),
        ('Female', 'Female')
    )
    name = models.CharField(max_length=255)
    contx_no = models.CharField(max_length=255)
    gender = models.CharField(max_length=255, choices=gender)

    def __str__(self):
        return self.name

class Vote(models.Model):
    fresher = models.ForeignKey(Freshers, on_delete=models.CASCADE)
    vote = models.IntegerField()
