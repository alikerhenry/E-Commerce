import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Whoops404 } from "./pages/Error";

function App(){
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='/'>
              LEMONGREEN
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Contact Us
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    Categories
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Smart Phones
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Laptops
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Fragrances
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Skin care
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Groceries
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Home-Decoration
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className='container-xl '>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products/:productId' element={<Product />} />
          <Route path='*' element={<Whoops404 />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
