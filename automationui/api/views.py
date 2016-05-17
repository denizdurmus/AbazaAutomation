from .models import SelectorType, ActionType, OutputType, TestCase, TestCaseStep, Action, Output
from rest_framework import viewsets
from django.views import generic
from .serializers import SelectorTypeSerializer, ActionTypeSerializer, OutputTypeSerializer, TestCaseSerializer, TestCaseStepSerializer, ActionSerializer, OutputSerializer

# Create your views here.
class SelectorTypeViewSet(viewsets.ModelViewSet):
    queryset = SelectorType.objects.all()
    serializer_class = SelectorTypeSerializer

class ActionTypeViewSet(viewsets.ModelViewSet):
    queryset = ActionType.objects.all()
    serializer_class = ActionTypeSerializer

class OutputTypeViewSet(viewsets.ModelViewSet):
    queryset = OutputType.objects.all()
    serializer_class = OutputTypeSerializer

class TestCaseViewSet(viewsets.ModelViewSet):
    queryset = TestCase.objects.all()
    serializer_class = TestCaseSerializer

class TestCaseStepViewSet(viewsets.ModelViewSet):
    queryset = TestCaseStep.objects.all()
    serializer_class = TestCaseStepSerializer

class ActionViewSet(viewsets.ModelViewSet):
    queryset = Action.objects.all()
    serializer_class = ActionSerializer
    
class OutputViewSet(viewsets.ModelViewSet):
    queryset = Output.objects.all()
    serializer_class = OutputSerializer