from xmlrpc.client import DateTime
from django_summernote.widgets import SummernoteWidget, SummernoteInplaceWidget
from django import forms
from django.forms import DateField, widgets
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = "__all__"
        exclude = ('user',)
        widgets = {
            'body': SummernoteWidget(),
            'updated_at': widgets.DateTimeInput(attrs={'type': 'datetime-local'})
        }
