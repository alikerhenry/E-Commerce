import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const productId = //
    useEffect(() => {
      setLoading(true);
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((res) => setProduct(res.product))
        .then(() => setLoading(false))
        .catch(setError);
    }, []);
  console.log(product);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
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
  );
}

export default Product;
