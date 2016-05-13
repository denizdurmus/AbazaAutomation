from .models import SelectorType, ActionType, OutputType, TestCase, TestCaseStep, Action, Output
from rest_framework import serializers

class SelectorTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SelectorType
        fields = ('id', 'name')

class ActionTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ActionType
        fields = ('id', 'name', 'hasInput', 'hasElement')

class OutputTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OutputType
        fields = ('id', 'name')

class TestCaseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TestCase
        fields = ('id', 'name', 'description', 'status')

class TestCaseStepSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TestCaseStep
        fields = ('id', 'name', 'description', 'testCaseId', 'runOrder', 'status')

class ActionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Action
        fields = ('id', 'selectorType', 'selectorValue', 'actionType', 'value', 'testCaseStep', 'runOrder')
        
class OutputSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Output
        fields = ('id', 'selectorType', 'selectorValue', 'outputType', 'value', 'action')