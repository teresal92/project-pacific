import React, { useState, useEffect } from 'react';
import ProductListEntry from './ProductDetail/ProductListEntry.jsx';
import ProductDetailOverview from './ProductDetail/ProductDetailOverview.jsx';
import { API_KEY } from '../config/config.js';
const axios = require('axios');


function ProductList({getSelectedProduct}) {
  const [ products, setProducts ] = useState([]);

  // fetch list of products - might need to go in App
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products', {
          headers: { 'Authorization': `${API_KEY}` }
        });
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }

    }
    getProducts();
  }, []);

  return (
    <div className="product-id"  onClick={() => {getSelectedProduct()}}>
      {products.map((product, i) => <ProductListEntry product={product} key={`product-key-${i}`} />)}
    </div>
  )
};

export default ProductList;