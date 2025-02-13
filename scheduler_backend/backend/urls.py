from django.contrib import admin
from django.urls import path
from .views import test_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('test/', test_view),
    path("", test_view),
]
