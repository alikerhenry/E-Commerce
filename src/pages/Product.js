import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Whoops404 from './Error';
import { fetchProductDetails } from '../api/api';

const Product = () => {
  const params = useParams();
  const { product, status } = useQuery(
    'products',
    fetchProductDetails(params.productId)
  );
  return (
    <div>
      { status === "success" && (
        <div className='container-md '>
          <div className='row justify-content-evenly gy-3'>
            <div
              className='card col-8 shadow'
              style={{ width: '10rem' }}
              key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className='card-img-bottom rounded'
              />
              <h5 className='card-text'>{product.title}</h5>
              <span className='card-text'>${product.price}</span>
              <Link to='/products/:productId'>
                <span className='btn btn-success'>View</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {status === 'loading' && (
        <div>Loading...</div>
      )}

      {status === 'error' && (
        <div>
          <Whoops404/>
        </div>
      )}
    </div>
  );
}

export default Product;
