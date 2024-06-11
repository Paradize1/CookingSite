from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet, FoodViewSet, FoodListViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'foods', FoodViewSet)
router.register(r'foodlist', FoodListViewSet, basename='foodlist')

urlpatterns = [
    path('category/', CategoryViewSet.as_view({'get': 'list'})),
    path('foodlist/', FoodListViewSet.as_view({'get': 'list'})),
    path('food/', FoodViewSet.as_view({'get': 'list'})),
    path('food/<int:pk>/', FoodViewSet.as_view({'get': 'retrieve'})),
    path('category/<int:pk>/', CategoryViewSet.as_view({'get': 'retrieve'})),


]