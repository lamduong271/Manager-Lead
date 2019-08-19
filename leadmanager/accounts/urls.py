from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views
from rest_framework import routers

# router= routers.DefaultRouter()
# router.register('api/auth/register',RegisterAPI.as_view())
# router.register('api/auth', include('knox.urls'))
# urlpatterns = [
#     path('', include(router.urls)),
# ]
urlpatterns = [
         path('api/auth', include('knox.urls')),
         path('api/auth/register', RegisterAPI.as_view()),
         path('api/auth/login', LoginAPI.as_view()),
         path('api/auth/user', UserAPI.as_view())
]
