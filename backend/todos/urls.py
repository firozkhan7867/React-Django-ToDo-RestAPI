from django.urls import path,include
from rest_framework.routers import DefaultRouter
from todos import views

router = DefaultRouter()
router.register('todos',views.TodoViewSet,basename="all-todos")
router.register('alltodos',views.GetAllTodoViewSet,basename='todosss')



urlpatterns = [
    path('',include(router.urls)),
]