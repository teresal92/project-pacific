/* eslint-disable import/extensions */
import React, { useState, useEffect, lazy, Suspense } from 'react';
// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
// Icons
import Icon from '@mui/material/Icon';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

// Components
//import ProductInfo from './ProductInfo.jsx';
//import ImageGallery from './ImageGallery.jsx';
//import StyleSelector from './StyleSelector.jsx';
//import AddToCart from './AddToCart.jsx';
import Ratings from './Ratings.jsx';
import OutfitList from '../OutfitnRelated/YourOutfit.jsx';
import RelatedItems from '../OutfitnRelated/RelatedItems.jsx';

const ProductInfo = lazy(() => import('./ProductInfo.jsx'))
const ImageGallery = lazy(() => import('./ImageGallery.jsx'))
const StyleSelector = lazy(() => import('./StyleSelector.jsx'))
const AddToCart = lazy(() => import('./AddToCart.jsx'))


const axios = require('axios');

function ProductDetailOverview({ productId, outfit, selected, add, remove }) {
  const [productInfo, setProductInfo] = useState([]);
  const [styles, setStyles] = useState([]);
  const [ratings, setRatings] = useState({});
  const [selectedStyle, setSelectedStyle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // TODO: handle cases when url or skus are null
  useEffect(() => {
    const getProductInfo = axios.get(`/api/products/${productId}`);
    const getStyles = axios.get(`/api/products/${productId}/styles`);
    const getReviews = axios.get(`/api/reviews/meta/${productId}`);

    Promise.all([getProductInfo, getStyles, getReviews])
      .then(res => {
        setProductInfo(res[0].data);
        setStyles(res[1].data.results);
        setSelectedStyle(res[1].data.results[0]);
        setRatings(res[2].data.ratings);
        setIsLoading(false);
      })
      .catch(err => console.error(err))

  }, [productId]);

  // when style is clicked within styleSelector, pass particular style id into handleStyleSelector
  // to set selectedStyle
  const handleStyleSelector = (style) => {
    if (style) {
      setSelectedStyle(style);
    }
  };

  const handleExpandedView = (val) => {
    setIsExpanded(val);
  };

  return !isLoading ? (
    <div>
      <Container>
        <Box sx={{ minHeight: 600 }}>
          <Grid container spacing={3}>
            {!isExpanded ? (
              <>
                <Grid className="imageContainer" item xs={12} sm={6} md={7}>
                  <Suspense fallback={<div>Loading...</div>}>
                  <ImageGallery
                    style={selectedStyle}
                    isExpanded={isExpanded}
                    handleExpandedView={handleExpandedView}
                  />
                  </Suspense>
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <Stack direction="row" spacing={3}>
                    <Ratings ratings={ratings} />
                    <a href="#">Read all Reviews</a>
                    <span className="social">
                      <a className="sm-icon" href="https://www.pinterest.com/"><PinterestIcon /></a>
                      <a className="sm-icon" href="https://www.facebook.com/"><FacebookIcon /></a>
                      <a className="sm-icon" href="https://twitter.com/"><TwitterIcon /></a>
                    </span>
                  </Stack>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ProductInfo
                      product={productInfo}
                      style={selectedStyle}
                    />
                    <StyleSelector
                      styles={styles}
                      selectedStyle={selectedStyle}
                      handleStyleSelector={handleStyleSelector}
                    />
                    <AddToCart style={selectedStyle} />
                  </Suspense>
                </Grid>
              </>
            ) : (
              <Grid className="imageContainer" item xs={12}>
                <Suspense fallback={<div>Loading...</div>}>
                  <ImageGallery
                    style={selectedStyle}
                    isExpanded={isExpanded}
                    handleExpandedView={handleExpandedView}
                  />
                </Suspense>
              </Grid>
            )}
          </Grid>
          <Grid className='related'>
            <RelatedItems productId={productId} />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <OutfitList outfit={outfit} selected={selected} item={selectedStyle} add={add} remove={remove} />
          </Grid>
        </Box>
      </Container>
    </div>
  ) : (
    <div>Loading... </div>
  );
}

export default ProductDetailOverview;
