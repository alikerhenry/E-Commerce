import React from "react";
import './css/App.css';
import {Routes,Route,Link} from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Whoops404 from "./pages/Error";
import { QueryClient, QueryClientProvider} from 'react-query'
import Category from "./pages/Category";

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark nav-container'>
          <div className='container-fluid'>
            <a className='lemongreen navbar-brand' href='/'>
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
            <div
              className='collapse navbar-collapse product-navbar'
              id='navbarSupportedContent'>
              <ul className='navbar-nav mb-2 mb-lg-0 navbar-links'>
                <li className='nav-item '>
                  <Link to='/'>
                    <button className="nav-link active" aria-current="page">
                      Home
                    </button>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='about'>
                    <button className="nav-link">
                      About
                    </button>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='contactUs'>
                    <button className="nav-link">
                      ContactUs
                    </button>
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    style={{"font-size":"1.5rem"}}
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    Categories
                  </a>
                  <ul
                    className='dropdown-container dropdown-menu'
                    aria-labelledby='navbarDropdown'>
                    <li>
                      <Link to='/category/smartphones'>
                        Smart Phones
                      </Link>
                    </li>
                    <li>
                      <Link to='/category/laptops'>
                        Laptops
                      </Link>
                    </li>
                    <li>
                      <Link to='/category/frangrances'>
                        Fragrances
                      </Link>
                    </li>
                    <li>
                      <Link to='/category/skin-care'>
                        Skin care
                      </Link>
                    </li>
                    <li>
                      <Link to='/category/groceries'>
                        Groceries
                      </Link>
                    </li>
                    <li>
                      <Link to='/category/home-decoration'>
                        Home-Decoration
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className='container-xl products-container'>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:productId' element={<Product />} />
            <Route path='/category' element={<Category />}>
              <Route path=':categoryName' element={<Category />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='*' element={<Whoops404 />} />
          </Routes>
        </QueryClientProvider>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
