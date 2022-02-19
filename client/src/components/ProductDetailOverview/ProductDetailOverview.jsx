/* eslint-disable import/extensions */
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
import Ratings from './Ratings.jsx';
import OutfitList from '../OutfitnRelated/YourOutfit.jsx';

const axios = require('axios');

function ProductDetailOverview({ productId, outfit, selected, add }) {
  const [productInfo, setProductInfo] = useState([]);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // TODO: handle cases when url or skus are null
  useEffect(() => {
    const getProductInfo = axios.get(`/api/products/${productId}`);
    const getStyles = axios.get(`/api/products/${productId}/styles`);

    Promise.all([getProductInfo, getStyles])
      .catch(err => console.error(err))
      .then(res => {
        setProductInfo(res[0].data);
        setStyles(res[1].data.results);
        setSelectedStyle(res[1].data.results[0]);
      })
      .then(() => setIsLoading(false));
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
    <Container>
      <Grid container justify="center" spacing={3}>
        {!isExpanded ? (
        <>
          <Grid className="imageContainer" item xs={12} sm={6} md={7}>
            <ImageGallery
              style={selectedStyle}
              isExpanded={isExpanded}
              handleExpandedView={handleExpandedView}
            />
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
              selectedStyle={selectedStyle}
              handleStyleSelector={handleStyleSelector}
            />
            <AddToCart style={selectedStyle} />
          </Grid>
        </>
        ) : (
          <Grid className="imageContainer" item xs={12}>
            <ImageGallery
              style={selectedStyle}
              isExpanded={isExpanded}
              handleExpandedView={handleExpandedView}
            />
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <OutfitList outfit={outfit} selected={selected} item={selectedStyle} add={add}/>
      </Grid>
    </Container>
  ) : (
    <div>Loading... </div>
  );

  // return !isLoading ? (
  //   <Container>
  //     <Grid container justify="center" spacing={3}>
  //       <Grid className="imageContainer" item xs={12} sm={6} md={7} >
  //         <ImageGallery
  //           style={selectedStyle}
  //           isExpanded={isExpanded}
  //           handleExpandedView={handleExpandedView}
  //         />
  //       </Grid>
  //       <Grid item xs={12} sm={6} md={5}>
  //         <Stack direction="row" spacing={3}>
  //           <Ratings />
  //           <a href="#">Read all Reviews</a>
  //           <span className="social">
  //             <a className="sm-icon" href="https://www.pinterest.com/"><PinterestIcon /></a>
  //             <a className="sm-icon" href="https://www.facebook.com/"><FacebookIcon /></a>
  //             <a className="sm-icon" href="https://twitter.com/"><TwitterIcon /></a>
  //           </span>
  //         </Stack>
  //         <ProductInfo
  //           product={productInfo}
  //           style={selectedStyle}
  //         />
  //         <StyleSelector
  //           styles={styles}
  //           selectedStyle={selectedStyle}
  //           handleStyleSelector={handleStyleSelector}
  //         />
  //         <AddToCart style={selectedStyle} />
  //       </Grid>
  //     </Grid>
  //     <Grid item xs={12} sm={12} md={12}>
  //       <OutfitList outfit={outfit} selected={selected} item={selectedStyle} add={add}/>
  //     </Grid>
  //   </Container>
  // ) : (
  //   <div>Loading... </div>
  // );

}

export default ProductDetailOverview;
