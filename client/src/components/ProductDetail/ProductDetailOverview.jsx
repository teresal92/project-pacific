import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo.jsx';
import { API_KEY } from '../../config/config.js';
const axios = require('axios');


function ProductDetailOverview(props) {
  const [ products, setProducts ] = useState([]);

  // fetch list of products - might need to go in App
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products', {
          headers: { 'Authorization': `${API_KEY}` }
        });
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }

    }
    getProducts();
    // axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products', {
    //   headers: {
    //     'Authorization': `${API_KEY}`
    //   }
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     setProducts(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
  }, []);

  return (
    <div>
      {/* Reviews component */}

      {products.map((product, i) => <ProductInfo product={product} key={`product-key-${i}`} /> )}
    </div>
  )
}

export default ProductDetailOverview;