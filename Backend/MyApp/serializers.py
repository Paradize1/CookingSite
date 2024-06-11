from rest_framework import serializers
from .models import Food, Category


class FoodSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = Food
        fields = ['id', 'title', 'foodCategory', 'text', 'photo_url']

    def get_photo_url(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None

    def to_representation(self, instance):
        rep = super(FoodSerializer, self).to_representation(instance)
        rep['foodCategory'] = instance.foodCategory.name
        return rep


class FoodListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['id', 'title', 'foodCategory']

    def to_representation(self, instance):
        rep = super(FoodListSerializer, self).to_representation(instance)
        rep['foodCategory'] = instance.foodCategory.name
        return rep


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        
        fields = ['id', 'name']