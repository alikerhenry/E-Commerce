import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from './Category';

function Categories(){
  return(
    <Routes>
      <Route path='categories/:smartphones' element={<Category/>}/>
      <Route path='categories/:laptops' element={<Category/>}/>
      <Route path='categories/:fragrances' element={<Category/>}/>
      <Route path='categories/:skin-care' element={<Category/>}/>
      <Route path='categories/:groceries' element={<Category/>}/>
      <Route path='categories/:home-decoration' element={<Category/>}/>
    </Routes>
  )
}

export default Categories;
