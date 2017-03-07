from django.db import models

class SelectorType(models.Model):
    name = models.CharField(max_length=64)

class SeleniumAction(models.Model):
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=2048)
    javaMethod = models.CharField(max_length=256)

class ActionType(models.Model):
    name = models.CharField(max_length=64)
    hasInput = models.CharField(max_length=1)
    hasElement = models.CharField(max_length=1)
    seleniumAction = models.ForeignKey(SeleniumAction)

class OutputType(models.Model):
    name = models.CharField(max_length=64)

class TestCase(models.Model):
    name = models.CharField(max_length=512)
    description = models.CharField(max_length=2048)
    status = models.CharField(max_length=1)

class TestCaseStep(models.Model):
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=2048)
    testCase = models.ForeignKey(TestCase)
    runOrder = models.IntegerField()
    status = models.CharField(max_length=1)

class Action(models.Model):
    selectorType = models.ForeignKey(SelectorType)
    selectorValue = models.CharField(max_length=512)
    actionType = models.ForeignKey(ActionType)
    value = models.CharField(max_length=999999)
    testCaseStep = models.ForeignKey(TestCaseStep)
    runOrder = models.IntegerField()

class Output(models.Model):
    selectorType = models.ForeignKey(SelectorType)
    selectorValue = models.CharField(max_length=512)
    outputType = models.ForeignKey(OutputType)
    value = models.CharField(max_length=999999)
    action = models.ForeignKey(Action)