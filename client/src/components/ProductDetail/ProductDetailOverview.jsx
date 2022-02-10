import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo.jsx';
import ProductImageGallery from './ProductImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import { API_KEY } from '../../config/config.js';
const axios = require('axios');


function ProductDetailOverview({product}) {
  // const [productInfo, setProductInfo] = useState([]);
  const [ styles, setStyles ] = useState([]);

  // fetch list of products - might need to go in App
  useEffect(() => {
    async function getStyles() {
      try {
        const res = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${product.id}/styles`, {
          headers: { 'Authorization': `${API_KEY}` }
        });
        console.log(res.data);
        setStyles(res.data);
      } catch (err) {
        console.error(err);
      }

    }
    getStyles();

  }, []);

  return (
    <div>
      <span><a href="#">Read all 'REPLACE' reviews</a></span>
      <span>Social Media icons</span>
      <ProductImageGallery styles={styles} />
      <ProductInfo product={product} styles={styles} />
      <StyleSelector styles={styles}/>
      <AddToCart styles={styles}/>
      {/* {products.map((product, i) => {
        <ProductInfo product={product} key={`product-key-${i}`} />
      })} */}
    </div>
  )
};

export default ProductDetailOverview;