import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from './Category';

function Categories(){
  return(
    <Routes>
      <Route path='category/:smartphones' element={<Category/>}/>
      <Route path='category/:laptops' element={<Category/>}/>
      <Route path='category/:fragrances' element={<Category/>}/>
      <Route path='category/:skin-care' element={<Category/>}/>
      <Route path='category/:groceries' element={<Category/>}/>
      <Route path='category/:home-decoration' element={<Category/>}/>
    </Routes>
  )
}

export default Categories;
