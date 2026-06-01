from rest_framework import serializers
from .models import ContactMessage


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactMessage
        fields = '__all__'

    def validate_email(self, value):

        if not value:
            raise serializers.ValidationError(
                "Email obligatoire"
            )

        return value