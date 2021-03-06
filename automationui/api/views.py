from .models import SelectorType, ActionType, OutputType, TestCase, TestCaseStep, Action, Output, SeleniumAction
from rest_framework import viewsets
from rest_framework.decorators import list_route
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from django_datatables_view.base_datatable_view import BaseDatatableView
from .serializers import SelectorTypeSerializer, ActionTypeSerializer, OutputTypeSerializer, TestCaseSerializer, TestCaseStepSerializer, ActionSerializer, OutputSerializer, SeleniumActionSerializer

# Create your views here.
class SelectorTypeViewSet(viewsets.ModelViewSet):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    queryset = SelectorType.objects.all()
    serializer_class = SelectorTypeSerializer    

class ActionTypeViewSet(viewsets.ModelViewSet):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    queryset = ActionType.objects.all()
    serializer_class = ActionTypeSerializer

class ActionTypeDataTableQuery(BaseDatatableView):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    model = ActionType
    columns = ['id', 'name', 'hasElement', 'hasInput', 'seleniumMethod']

    def prepare_results(self, qs):
        serializer = ActionTypeSerializer(qs, many=True)
        return serializer.data

class OutputTypeViewSet(viewsets.ModelViewSet):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    queryset = OutputType.objects.all()
    serializer_class = OutputTypeSerializer

class TestCaseViewSet(viewsets.ModelViewSet):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    queryset = TestCase.objects.all()
    serializer_class = TestCaseSerializer

class TestCaseStepViewSet(viewsets.ModelViewSet):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    queryset = TestCaseStep.objects.all()
    serializer_class = TestCaseStepSerializer

class ActionViewSet(viewsets.ModelViewSet):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    queryset = Action.objects.all()
    serializer_class = ActionSerializer
    
class OutputViewSet(viewsets.ModelViewSet):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    queryset = Output.objects.all()
    serializer_class = OutputSerializer

class SeleniumActionViewSet(viewsets.ModelViewSet):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    queryset = SeleniumAction.objects.all()
    serializer_class = SeleniumActionSerializer

class SeleniumActionDataTableQuery(BaseDatatableView):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    model = SeleniumAction
    columns = ['id', 'name', 'description', 'javaMethod']

    def prepare_results(self, qs):
        serializer = SeleniumActionSerializer(qs, many=True)
        return serializer.data