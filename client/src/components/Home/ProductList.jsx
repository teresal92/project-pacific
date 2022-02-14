import React, { useState, useEffect } from 'react';
import ProductListEntry from './ProductListEntry.jsx';
import { API_KEY } from '../../config/config.js';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import {Carousel} from '3d-react-carousal';

const axios = require('axios');


function ProductList({ getSelectedProduct }) {
  const [products, setProducts] = useState([]);
  const [ styles, setStyles ] = useState([]);



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
  }, []);

  const getProductId = (event) => {
    console.log(event);
  }

  console.log('products: ', products);

  return (
    <div>
      <Carousel slides={products.map((product, i) => (
            <ProductListEntry
              product={product}
              key={`product-key-${i}`}
              getId={getProductId} />
              ))}/>
    </div>
  )
};

export default ProductList;