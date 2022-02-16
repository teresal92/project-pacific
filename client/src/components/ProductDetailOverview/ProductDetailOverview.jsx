import React, { useState, useEffect } from 'react';
// MUI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
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
// import exStyleData from './exStyleData.js';
import Ratings from './Ratings.jsx';

import { API_KEY } from '../../config/config.js';
const axios = require('axios');

const ProductDetailOverview = ({productId}) => {
  const [ productInfo, setProductInfo ] = useState([]);
  const [ styles, setStyles ] = useState([]);
  // TODO: update default value from dummyData to default to first style obj in styles array
  const [ selectedStyle, setSelectedStyle ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  // fetch list of styles and product info for particular product id
  useEffect(() => {
    let getProductInfo = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}`, {
      headers: { 'Authorization': `${API_KEY}` }
    });

    let getStyles = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`, {
      headers: { 'Authorization': `${API_KEY}` }
    });

    Promise.all([ getProductInfo, getStyles])
      .catch(err => console.error(err))
      .then(res => {
        setProductInfo(res[0].data);
        setStyles(res[1].data.results);
        setSelectedStyle(res[1].data.results[0]);
      })
      .then(() => setIsLoading(false));
  }, [productId]);

  // passed setSelectedStyle as prop into styleSelector
  // when style is clicked within styleSelector, pass particular style id into handleStyleSelector
  // to set selectedStyle
  function handleStyleSelector(style) {
    if (style.length > 0) {
      setSelectedStyle(style);
    }
  }

  return !isLoading ? (
    <Container maxWidth="md">
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={6} md={7}>
          <ImageGallery style={selectedStyle} />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Stack direction="row" spacing={3}>
              <Ratings />
              <a href="#">Read all Reviews</a>
              <span className="social">
                <a className="sm-icon" href="https://www.pinterest.com/"><PinterestIcon /></a>
                <a className="sm-icon" href="https://www.facebook.com/"><FacebookIcon /></a>
                <a className="sm-icon" href="https://twitter.com/"><TwitterIcon /></a>
              </span>
          </Stack>
          <ProductInfo
            product={productInfo}
            style={selectedStyle}
          />
          <StyleSelector
            styles={styles}
            handleStyleSelector={handleStyleSelector}
          />
          <AddToCart style={selectedStyle}/>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <div>Loading... </div>
  )
};

export default ProductDetailOverview;


// function getStyles() {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`, {
  //       headers: { 'Authorization': `${API_KEY}` }
  //     })
  //     .then( res => setStyles(res.data.results))
  //     .catch( err => console.error(err))
  //     .then( () => setIsLoading(false));
  // };
  // getStyles();

  // function getProductInfo() {
  //
  //   .then( res => setProductInfo(res.data))
  //   .catch( err => console.error(err));
  // }
  // getProductInfo();