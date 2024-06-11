// Category.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Замените URL на ваш реальный URL API
    fetch('http://127.0.0.1:8000/category')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Ошибка при загрузке категорий:', error));
  }, []);

  return (
    <div className="category-container">
      <h1>Категории</h1>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;