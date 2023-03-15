from django.contrib import admin
from django.urls import path,include, re_path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/web', admin.site.urls),
    path('api/schema/',SpectacularAPIView.as_view(),name="api-schema"),
    path('api/docs',SpectacularSwaggerView.as_view(url_name="api-schema"),name="api-docs"),
    path('api/auth/',include('accounts.urls')),
    path('api/todo/',include('todos.urls'))
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]