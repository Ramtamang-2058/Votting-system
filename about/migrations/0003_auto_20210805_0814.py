# Generated by Django 3.2 on 2021-08-05 08:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0002_achievement'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hospital',
            name='address',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='address_np',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='contact_number',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='contact_number_np',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='province',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='province_np',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='organization',
            name='category',
            field=models.CharField(blank=True, choices=[('L', 'Leading'), ('S', 'Support'), ('C', 'Co-Support')], default='C', max_length=2, null=True),
        ),
        migrations.AlterField(
            model_name='organization',
            name='description',
            field=models.CharField(blank=True, max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='organization',
            name='description_np',
            field=models.CharField(blank=True, max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='description',
            field=models.CharField(max_length=1024),
        ),
        migrations.AlterField(
            model_name='team',
            name='description_np',
            field=models.CharField(blank=True, max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='primary_contact',
            field=models.CharField(blank=True, max_length=14, null=True),
        ),
    ]
