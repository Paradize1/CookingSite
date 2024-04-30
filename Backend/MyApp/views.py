
from rest_framework import viewsets
from .models import Food, Category
from .serializers import FoodSerializer, CategorySerializer, FoodListSerializer
from rest_framework.response import Response


class CategoryViewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class FoodViewSet(viewsets.ModelViewSet):

    queryset = Food.objects.all()
    serializer_class = FoodSerializer

    def get_queryset(self):
        queryset = Food.objects.all()
        Food_id = self.request.query_params.get('food_id', None)
        if Food_id is not None:
            queryset = queryset.filter(id=Food_id)
        return queryset

    def get(self, request):
        queryset = Food.objects.all()
        serializer = FoodSerializer(queryset, context={"request": request}, many=True)
        return Response(serializer.data)


class FoodListViewSet(viewsets.ModelViewSet):

    queryset = Food.objects.all()
    serializer_class = FoodListSerializer

    def get_queryset(self):
        queryset = Food.objects.all()
        Category_id = self.request.query_params.get('category', None)
        if Category_id is not None:
            queryset = queryset.filter(foodCategory=Category_id)
        return queryset