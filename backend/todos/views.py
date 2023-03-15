from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from .serializers import TodoSerializer
from .models import Todo
from .permissions import UpdateOwnTodo
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    permission_classes = (UpdateOwnTodo,IsAuthenticated)

    
    def get_queryset(self):
        return self.queryset.filter(user=self.request.user).order_by('-id')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    

class GetAllTodoViewSet(viewsets.ViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = TodoSerializer
    def list(self,request):
        if str(request.user) == "AnonymousUser":
            return Response({"message":"Action performed not allowed"}, status= status.HTTP_401_UNAUTHORIZED)
        queryset = Todo.objects.all()
        serializer = TodoSerializer(queryset, many=True)
        return Response({"Message":"All Todos","data":serializer.data},status=status.HTTP_200_OK)

