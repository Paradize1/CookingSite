import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';

import CategoryList from './Category';
import FoodList from './FoodList';
import CategoryButton from './CategoryButton';
import MainButton from './MainButton';
import FoodDetail from './FoodDetail'; // Добавьте импорт FoodDetail
import CategoryDetail from './CategoryDetail';
import ApiDocs from './ApiDocs'; // Импорт компонента ApiDocs


function App() {
  return (
    <Router>
      <div className="container">
        <div className='top-bar'>
          <div className='top-left'>
            <MainButton />
          </div>

          <div className='top-right'>
            <CategoryButton />
          </div>
        </div>

        <div className='content'>
          <Routes>
            <Route path="/foodlist" element={<FoodList />} />
            <Route path="/category" element={<CategoryList />} />
            <Route path="/food/:id" element={<FoodDetail />} /> {/* Обновите маршрут для FoodDetail */}
            <Route path="/category/:id" element={<CategoryDetail />} /> {/* Новый маршрут */}
            <Route path="/api-docs" element={<ApiDocs />} /> {/* Маршрут для документации API */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;