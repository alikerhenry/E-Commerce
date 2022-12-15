import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.bundle.js'
import App from './App';

//TO CHECK;
//First one
//https://jsonplaceholder.typicode.com/
//E-commerce
//https://dummyjson.com/docs/products
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
//UP NEXT:
//Add Router(user,posts)
//Components for post (useEffect)

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
    <App />
    </>

);