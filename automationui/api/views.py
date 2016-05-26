from .models import SelectorType, ActionType, OutputType, TestCase, TestCaseStep, Action, Output
from rest_framework import viewsets
from rest_framework.decorators import list_route
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from django_datatables_view.base_datatable_view import BaseDatatableView
from .serializers import SelectorTypeSerializer, ActionTypeSerializer, OutputTypeSerializer, TestCaseSerializer, TestCaseStepSerializer, ActionSerializer, OutputSerializer

# Create your views here.
class SelectorTypeViewSet(viewsets.ModelViewSet):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    queryset = SelectorType.objects.all()
    serializer_class = SelectorTypeSerializer    

class ActionTypeViewSet(viewsets.ModelViewSet, BaseDatatableView):
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication,)
    queryset = ActionType.objects.all()
    serializer_class = ActionTypeSerializer

    @list_route()
    def dataTableQuery(self, request, *args, **kwargs):
        print(request.GET.get(u'length', None))
        serializer = self.get_serializer(ActionType.objects.all(), many=True)
        return Response(serializer.data)

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