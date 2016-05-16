"""automationui URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from rest_framework import routers
from manager import views


router = routers.DefaultRouter()
router.register(r'selectorType', views.SelectorTypeViewSet)
router.register(r'actionType', views.ActionTypeViewSet)
router.register(r'outputType', views.OutputTypeViewSet)
router.register(r'testCase', views.TestCaseViewSet)
router.register(r'testCaseStep', views.TestCaseStepViewSet)
router.register(r'action', views.ActionViewSet)
router.register(r'output', views.OutputViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^ui/', include('manager.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
