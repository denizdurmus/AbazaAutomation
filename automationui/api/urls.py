from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'selectorType', views.SelectorTypeViewSet)
router.register(r'actionType', views.ActionTypeViewSet)
router.register(r'outputType', views.OutputTypeViewSet)
router.register(r'testCase', views.TestCaseViewSet)
router.register(r'testCaseStep', views.TestCaseStepViewSet)
router.register(r'action', views.ActionViewSet)
router.register(r'output', views.OutputViewSet)
router.register(r'seleniumAction', views.SeleniumActionViewSet)

app_name = 'api'
urlpatterns = [
	url(r'^actionType/dataTableQuery/$', views.ActionTypeDataTableQuery.as_view(), name='actionType-dataTableQuery'),
	url(r'^seleniumAction/dataTableQuery/$', views.SeleniumActionDataTableQuery.as_view(), name='seleniumAction-dataTableQuery'),
    url(r'^', include(router.urls)),	
]