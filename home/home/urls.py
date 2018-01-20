from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('account.urls', namespace='account')),
    path('article/', include('article.urls', namespace='article')),
    path('main/', include('main.urls', namespace='main')),
    re_path('.*', include('main.urls', namespace='main2')),
]
