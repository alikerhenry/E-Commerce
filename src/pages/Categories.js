import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from './Category';

function Categories(){
  return(
    <Routes>
      <Route path='/products/category/:smartphones' element={<Category/>}/>
      <Route path='/products/category/:laptops' element={<Category/>}/>
      <Route path='/products/category/:fragrances' element={<Category/>}/>
      <Route path='/products/category/:skin-care' element={<Category/>}/>
      <Route path='/products/category/:groceries' element={<Category/>}/>
      <Route path='/products/category/:home-decoration' element={<Category/>}/>
    </Routes>
  )
}

export default Categories;
