import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  console.log(products);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
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
            <Link to='/products/${item.id}'>
              <span className='btn btn-success'>View</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
