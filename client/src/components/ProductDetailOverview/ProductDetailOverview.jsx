import React, { useState, useEffect } from 'react';
// MUI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// Icons
import Icon from '@mui/material/Icon';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

// Components
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import exStyleData from './exStyleData.js';

import { API_KEY } from '../../config/config.js';
const axios = require('axios');

function ProductDetailOverview({productId}) {
  console.log(productId)
  const [ productInfo, setProductInfo ] = useState([]);
  const [ styles, setStyles ] = useState([]);
  // TODO: update default value from dummyData to default to first style obj in styles array
  const [ selectedStyle, setSelectedStyle ] = useState(exStyleData);
  // const productId = product[0].id;

  // fetch list of styles and product_idfor particular product id
  useEffect(() => {
    function getStyles() {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`, {
          headers: { 'Authorization': `${API_KEY}` }
        })
        .then( res => setStyles(res.data.results))
        .catch( err => console.error(err))
    };
    getStyles();

    function getProductInfo() {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}`, {
        headers: { 'Authorization': `${API_KEY}` }
      })
      .then( res => setProductInfo(res.data))
      .catch( err => console.error(err));
    }
    getProductInfo();
  }, []);

  // passed setSelectedStyle as prop into styleSelector
  // when style is clicked within styleSelector, pass particular style id into handleStyleSelector
  // to set selectedStyle
  function handleStyleSelector(style) {
    if (style.length > 0) {
      setSelectedStyle(style);
    }
  }

  return (
    <Container className='gallery' maxWidth="lg">
      <Grid container spacing={3}>
        <Grid className='imageContainer' item xs={12} sm={6} md={8}>
          <ImageGallery style={selectedStyle} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <span className="reviews"><a href="#">Read all 'REPLACE' reviews</a></span>
            </Grid>
            <Grid item xs={4}>
               <a className="sm-icon" href="https://www.pinterest.com/"><PinterestIcon /></a>
               <a className="sm-icon" href="https://www.facebook.com/"><FacebookIcon /></a>
               <a className="sm-icon" href="https://twitter.com/"><TwitterIcon /></a>
            </Grid>
          </Grid>
          <ProductInfo product={productInfo} style={selectedStyle} />
          <StyleSelector styles={styles} handleStyleSelector={handleStyleSelector}/>
          <AddToCart style={selectedStyle}/>
        </Grid>
      </Grid>
    </Container>
  )
};

 export default ProductDetailOverview;