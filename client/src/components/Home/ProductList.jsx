import React, { useState, useEffect, lazy, Suspense } from 'react';
//import ProductListEntry from './ProductListEntry.jsx';
import { Grid, Container, Box } from '@mui/material';
import { Carousel } from '3d-react-carousal';

const ProductListEntry = lazy(() => import('./ProductListEntry.jsx'))

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
      <div>
        <Grid item xs={12}>
          <Carousel slides={products.map((product, i) => (
            <Suspense fallback={<div>Loading...</div>}>
              <ProductListEntry
                product={product}
                key={`product-key-${i}`}
                getId={props.getId} />
            </Suspense>
          ))} />
        </Grid>
      </div>
      <Grid >
        <div className='textbox'>
          <h3>Lorem ipsum</h3>
          <div>dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </Grid >
    </div>
  )
};

export default ProductList;