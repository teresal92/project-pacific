import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import exStyleData from './exStyleData.js';
import { API_KEY } from '../../config/config.js';
// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// Icons
import Icon from '@mui/material/Icon';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const axios = require('axios');

function ProductDetailOverview({product}) {
  const [ productInfo, setProductInfo ] = useState([]);
  const [ styles, setStyles ] = useState([]);
  // need to update fake data with specific style obj onSelect
  const [ selectedStyle, setSelectedStyle ] = useState(exStyleData);
  const productId = product[0].id;

  // fetch list of styles for particular product id
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
    setSelectedStyle(style);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {/* for xs screen take up 6 cols */}
        <Grid item xs={12} sm={6} md={6}>
          <ImageGallery style={selectedStyle} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <span className='reviews'><a href="#">Read all 'REPLACE' reviews</a></span>
            </Grid>
            <Grid item xs={4}>
              <PinterestIcon />
              <FacebookIcon />
              <TwitterIcon />
            </Grid>
          </Grid>
          <ProductInfo product={productInfo} style={selectedStyle} />
          <StyleSelector styles={styles} handleStyleSelector={handleStyleSelector}/>
          <AddToCart style={selectedStyle}/>
        </Grid>
      </Grid>
    </Box>
  )
};

export default ProductDetailOverview;