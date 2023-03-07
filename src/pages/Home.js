import React from 'react';
import { useQuery } from 'react-query'
import '../css/App.css'
import  Whoops404  from './Error';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api/api';

const Home = () => {
  const { data, status } = useQuery('products', fetchProducts);
  const products = data?.products;

  return (
    <div>
      { status === 'success' && (
          <div className='container-md '>
            <div className='row flex-column g-5'>
              {products.map((item) => (
              <div class="card w-100 mb-3" /*style={{'max-width': '540px'}}*/>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img 
                      src={item.images[0]} 
                      alt={item.title}
                      className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title fs-1">{item.title}</h5>
                      <span className='card-text fs-2'>${item.price}</span>
                      <Link to='/products/:productId'>
                        <span className='btn align-self-baseline view-btn'>View</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
      )}

      { status === 'loading' && (
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      { status === 'error' && (
        <div>
          <Whoops404 />
        </div>
      )}

    </div>
  )
}

export default Home;
