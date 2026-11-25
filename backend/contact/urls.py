from django.urls import path
from .views import contact_view, send_message

urlpatterns = [
    path('', contact_view, name='contact'),
    # Adresse utilisée par le formulaire du site Angular
    path('send/', send_message, name='contact-send'),
]
