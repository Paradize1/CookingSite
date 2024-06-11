// FoodDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FoodDetail() {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/food/${id}`); // Замените URL на ваш реальный URL API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFood(data);
      } catch (error) {
        setError(error.message);
        console.error('Ошибка при загрузке блюда:', error);
      }
    };

    fetchFood();
  }, [id]);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!food) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="food-detail">
      <h1>{food.title}</h1>

      <a href={food.image} target="_blank" rel="noreferrer">
        <img src={food.image} alt={food.title} />
      </a>
      <p>{food.text}</p>
    </div>
  );
}

export default FoodDetail;