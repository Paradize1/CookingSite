from django.contrib import admin
from .models import Food, Category


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id','name')


class FoodAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'foodCategory')


admin.site.register(Food,FoodAdmin)
admin.site.register(Category,CategoryAdmin)