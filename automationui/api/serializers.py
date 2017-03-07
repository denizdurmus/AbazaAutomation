from .models import SelectorType, ActionType, OutputType, TestCase, TestCaseStep, Action, Output, SeleniumAction
from rest_framework import serializers

class SelectorTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SelectorType
        fields = ('id', 'name')

class SeleniumActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeleniumAction
        fields = ('id', 'name', 'description', 'javaMethod')

class ActionTypeSerializer(serializers.ModelSerializer):
    seleniumAction = SeleniumActionSerializer(read_only = True)
    seleniumAction_id = serializers.PrimaryKeyRelatedField(queryset = SeleniumAction.objects.all(), write_only = True, source = 'seleniumAction')
    class Meta:
        model = ActionType
        fields = ('id', 'name', 'hasInput', 'hasElement', 'seleniumAction', 'seleniumAction_id')

class OutputTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OutputType
        fields = ('id', 'name')

class TestCaseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TestCase
        fields = ('id', 'name', 'description', 'status')

class TestCaseStepSerializer(serializers.HyperlinkedModelSerializer):
    testCase = TestCaseSerializer()
    class Meta:
        model = TestCaseStep
        fields = ('id', 'name', 'description', 'testCase', 'runOrder', 'status')

class ActionSerializer(serializers.HyperlinkedModelSerializer):
    selectorType = SelectorTypeSerializer()
    actionType = ActionTypeSerializer()
    testCaseStep = TestCaseStepSerializer()
    class Meta:
        model = Action
        fields = ('id', 'selectorType', 'selectorValue', 'actionType', 'value', 'testCaseStep', 'runOrder')
        
class OutputSerializer(serializers.HyperlinkedModelSerializer):
    outputType = OutputTypeSerializer()
    class Meta:
        model = Output
        fields = ('id', 'selectorType', 'selectorValue', 'outputType', 'value', 'action')
        lookup_field = 'id'