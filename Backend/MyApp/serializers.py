from rest_framework import serializers
from .models import Food, Category


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['title', 'foodCategory', 'text', 'image']

    def to_representation(self, instance):
        rep = super(FoodSerializer, self).to_representation(instance)
        rep['foodCategory'] = instance.foodCategory.name
        return rep

    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)


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