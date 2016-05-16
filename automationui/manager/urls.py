from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

app_name = 'manager'
urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="manager/index.html")),
    url(r'^selectorType$', TemplateView.as_view(template_name="manager/selectorType.html")),
]