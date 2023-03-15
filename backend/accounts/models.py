from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
import os
# Create your models here.

def path_and_rename(instance,filename):
    upload_to = "Profile/"
    ext = filename.split('.')[-1]
    if instance.username:
        filename = f"{instance.email}.{ext}"
    return os.path.join(upload_to,filename)


class CustomUserManager(BaseUserManager):

    def create_user(self,email,password=None,**kwargs):
        if not email:
            raise ValueError('User must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email,**kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,email,password):
        user = self.create_user(email,password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

        


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255,blank=True)
    last_name = models.CharField(max_length=255,blank=True)
    phone = models.CharField(max_length=10)
    address = models.TextField(blank=True)
    image = models.FileField(upload_to=path_and_rename, verbose_name="User", blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'

    def get_full_name(self):
        return self.username
    

    def get_short_name(self):
        return self.username
    
    def __str__(self):
        return self.email




