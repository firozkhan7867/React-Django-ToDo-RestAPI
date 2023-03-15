from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from .serializers import CustomUserSerializer
from .models import CustomUser
from .permissions import UpdateOwnProfile
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.parsers import MultiPartParser

# Create your views here.
class CustomUserViewSet(viewsets.ModelViewSet):
    
    parser_classes = [MultiPartParser]
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (UpdateOwnProfile,)


class UserLoginApiView(ObtainAuthToken):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES
