import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CategoryDetail() {
  const { id } = useParams();
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodsByCategory = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/foodlist/?category=${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setFoods(data);
      } catch (error) {
        setError(error.message);
        console.error('Ошибка при загрузке блюд:', error);
      }
    };

    fetchFoodsByCategory();
  }, [id]);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!Array.isArray(foods)) {
    return <div>Ошибка: данные не являются массивом</div>;
  }

  return (
    <div className="food-list">
      {foods.map((food) => (
        <div key={food.id} className="food-item">
          <Link to={`/food/${food.id}`}>
            <img src={food.image} alt={food.title} />
            <h3>{food.title}</h3>
            <p>{food.text}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryDetail;
