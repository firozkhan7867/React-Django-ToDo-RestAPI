from django.urls import path,include
from accounts import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register("user",views.CustomUserViewSet,basename="user")

urlpatterns = [
    path('', include(router.urls)),
    path('login/',views.UserLoginApiView.as_view())
]