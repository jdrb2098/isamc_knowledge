from django.contrib import admin
from .models import *
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.

class SummerAdmin(SummernoteModelAdmin):
    summernote_fields = 'body'

admin.site.register(User)
admin.site.register(Tag)
admin.site.register(Review)
admin.site.register(Post, SummerAdmin)