import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/foodlist/'); // Замените URL на ваш реальный URL API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        setError(error.message);
        console.error('Ошибка при загрузке блюд:', error);
      }
    };

    fetchFoods();
  }, []);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className="food-list">
      {foods.map((food) => (
        <div key={food.id} className="food-item">
          <Link to={`/food/${food.id}`}>
            <img src={food.image} alt={food.title} />
            <h3>{food.title}</h3>
            <p>{food.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FoodList;