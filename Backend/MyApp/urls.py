from django.urls import path
from .views import CategoryViewSet, FoodViewSet, FoodListViewSet


urlpatterns = [
    path('category/', CategoryViewSet.as_view({'get': 'list'})),
    path('foodlist/', FoodListViewSet.as_view({'get': 'list'})),
    path('food/', FoodViewSet.as_view({'get': 'list'})),
]