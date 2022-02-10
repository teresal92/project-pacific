import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo.jsx';
import { API_KEY } from '../../config/config.js';
const axios = require('axios');


function ProductListEntry({product}) {

//   function getProductInfo() {
//     axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${product.id}`, {
//       headers: { 'Authorization': `${API_KEY}` }
//     })
//     .then( res => setProductInfo(res.data))
//     .catch( err => console.error(err));
//   }
//   getProductInfo();
// }, []);

  return (
    <div>

    </div>
  )
};

export default ProductListEntry;