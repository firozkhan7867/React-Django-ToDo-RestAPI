from rest_framework import serializers
from .models import Todo



class TodoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Todo
        fields = ("id","title","user","description","status")
        extra_kwargs ={'user_profile':{'read_only':True}}

