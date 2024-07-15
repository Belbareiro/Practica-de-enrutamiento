import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Number from '../Number/Number';
import Word from '../Hello/Hello';
import ColoredWord from '../ColoredWord/ColoredWord';
import React from 'react';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:num" element={<Number />} />
        <Route path="/hello" element={<Word />} />
        <Route path="/hello/:color1/:color2" element={<ColoredWord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;