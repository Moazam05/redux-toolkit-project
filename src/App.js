import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cocktails from './components/Cocktails';
import SingleCocktail from './components/SingleCocktail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cocktails />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
