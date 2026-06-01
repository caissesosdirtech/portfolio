from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializer


@api_view(['POST'])
def send_message(request):

    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save()

        return Response({
            'success': True,
            'message': 'Message envoyé avec succès'
        })

    return Response(serializer.errors, status=400)

@api_view(['POST'])
def contact_view(request):
    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors)