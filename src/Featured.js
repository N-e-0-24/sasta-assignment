import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Featured = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('https://financialmodelingprep.com/api/v3/stock/list?apikey=e14edda311e9a33784b997705922e16e')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <div>
      <h1>Featured Products</h1>
      <div className='item-container'>
        {products.map((product) => (
          <div className='card'>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Featured;