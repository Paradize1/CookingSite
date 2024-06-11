// MainButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; // Если у тебя есть стили для кнопки

function MainButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/foodlist/');
  };

  return (
    <button className="button-74" role="button" onClick={handleClick}>
      Главное меню
    </button>
  );
}

export default MainButton;
