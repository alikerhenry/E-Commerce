import React from 'react';
import { useQuery } from 'react-query'
import  Whoops404  from './Error';
import { Link } from 'react-router-dom';

const fetchProducts = async () => {
  const response = await (await fetch(`https://dummyjson.com/products`)).json();
  console.log('response1', response);
  return response;
};

const Home = () => {
  const { data, status } = useQuery(
    'products',
    fetchProducts
  );
  const products = data?.products;

  return (
    <div>
      { status === 'success' && (
          <div className='container-md '>
            <div className='row justify-content-evenly gy-3'>
              {products.map((item) => (
                <div
                  className='card col-8 shadow'
                  style={{ width: '10rem' }}
                  key={item.id}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className='card-img-bottom rounded'
                  />
                  <h5 className='card-text'>{item.title}</h5>
                  <span className='card-text'>${item.price}</span>
                  <Link to='/products/:productId'>
                    <span className='btn btn-success'>View</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
      )}

      { status === 'loading' && (
        <div>Loading...</div>
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
