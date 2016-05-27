from django.conf.urls import url, include
from rest_framework import routers
from . import views
from .views import ActionTypeViewSet

router = routers.DefaultRouter()
router.register(r'selectorType', views.SelectorTypeViewSet)
router.register(r'actionType', views.ActionTypeViewSet)
router.register(r'outputType', views.OutputTypeViewSet)
router.register(r'testCase', views.TestCaseViewSet)
router.register(r'testCaseStep', views.TestCaseStepViewSet)
router.register(r'action', views.ActionViewSet)
router.register(r'output', views.OutputViewSet)

app_name = 'api'
urlpatterns = [
	url(r'^actionType/dataTableQuery/$', views.ActionTypeDataTableQuery.as_view(), name='actionType-dataTableQuery'),
    url(r'^', include(router.urls)),	
]