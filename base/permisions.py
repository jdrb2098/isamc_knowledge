from rest_framework.permissions import BasePermission

class IsDeveloper(BasePermission):
   def has_permission(self, request, view):
      return request.user.is_developer and request.user.is_authenticated

class IsLeadDeveloper(BasePermission):
   def has_permission(self, request, view):
      return request.user.is_lead_developer and request.user.is_authenticated
