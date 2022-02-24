import React, { useState, useEffect } from 'react';
import ProductListEntry from './ProductListEntry.jsx';
import { Grid } from '@mui/material';
import { Carousel } from '3d-react-carousal';

const axios = require('axios');

function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getProducts();
  }, []);

  return (
    <div>
      <Grid >
        <Carousel slides={products.map((product, i) => (
          <ProductListEntry
            product={product}
            key={`product-key-${i}`}
            getId={props.getId} />
        ))} />
      </Grid>
    </div>
  )
};

export default ProductList;