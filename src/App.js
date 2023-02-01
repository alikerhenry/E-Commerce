import React from "react";
import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Whoops404 from "./pages/Error";
import { QueryClient, QueryClientProvider} from 'react-query'
import Category from "./pages/Category";
  
  function App(){
  const queryClient = new QueryClient()
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
                  <Link to='/'>
                    <a className='nav-link active' aria-current='page' href='#'>
                      Home
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='about'>
                    <a className='nav-link' href='#'>
                       About
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='contactUs'>
                    <a className='nav-link' href='#'>
                      Contact Us
                    </a>
                  </Link>
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
                    <Link to='/products/category/:smartphones'>
                      <a className='dropdown-item' href='#'>
                        Smart Phones
                      </a>
                    </Link>
                    </li>
                    <li>
                    <Link to='/products/category/:laptops'>
                      <a className='dropdown-item' href='#'>
                        Laptops
                      </a>
                    </Link>
                    </li>
                    <li>
                    <Link to='/products/category/:frangrances'>
                      <a className='dropdown-item' href='#'>
                        Fragrances
                      </a>
                    </Link>
                    </li>
                    <li>
                    <Link to='/products/category/:skin-care'>
                      <a className='dropdown-item' href='#'>
                        Skin care
                      </a>
                    </Link>
                    </li>
                    <li>
                    <Link to='/products/category/:groceries'>
                      <a className='dropdown-item' href='#'>
                        Groceries
                      </a>
                    </Link>
                    </li>
                    <li>
                    <Link to='/products/category/:home-decoration'>
                      <a className='dropdown-item' href='#'>
                        Home-Decoration
                      </a>
                    </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className='container-xl '>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:productId' element={<Product />} />
            <Route path='/products/category/:categoryName' element={<Category/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contactUs' element={<ContactUs/>} />
            <Route path='*' element={<Whoops404 />} />
          </Routes>
        </QueryClientProvider>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
