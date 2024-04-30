from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return f'{self.name}'


class Food(models.Model):
    objects = None
    title = models.CharField(max_length=128)
    foodCategory = models.ForeignKey(Category, on_delete=models.CASCADE)
    text = models.TextField()
    image = models.ImageField(upload_to='media/', blank=True, null=True)

    def __str__(self):
        return f'{self.foodCategory.id}|{self.foodCategory.name}'