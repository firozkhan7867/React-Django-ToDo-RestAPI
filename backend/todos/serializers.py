from rest_framework import serializers
from .models import Todo
from accounts.serializers import CustomUserSerializer



class TodoSerializer(serializers.ModelSerializer):
    # user = CustomUserSerializer()
    class Meta:
        model = Todo
        fields = ("id","title","description","status")

