from django.db import models
from django.conf import settings
from datetime import datetime

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    description = models.CharField(max_length=255,blank=True)
    status = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    completed_date = models.DateTimeField(null=True,blank=True)


    def save(self, *args, **kwargs):
        if self.status and not self.completed_date:
            self.completed_date = datetime.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title




