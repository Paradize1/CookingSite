// CategoryButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; // Если у тебя есть стили для кнопки

function CategoryButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/category');
  };

  return (
    <button className="button-74" role="button" onClick={handleClick}>
      Категории
    </button>
  );
}

export default CategoryButton;
