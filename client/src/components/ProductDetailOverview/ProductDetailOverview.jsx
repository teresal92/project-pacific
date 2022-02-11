import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import exStyleData from './exStyleData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faPinterest, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { API_KEY } from '../../config/config.js';
const axios = require('axios');


function ProductDetailOverview({product}) {
  const [ productInfo, setProductInfo ] = useState([]);
  const [ styles, setStyles ] = useState([]);
  // need to update fake data with specific style obj
  const [ selectedStyle, setSelectedStyle ] = useState(exStyleData);
  const productId = product[0].id;

  // fetch list of styles for particular product id
  useEffect(() => {
    function getStyles() {

      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`, {
          headers: { 'Authorization': `${API_KEY}` }
        })
        .then( res => setStyles(res.data.results))
        // .then( res => setStyles(res.data))
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



  return (
    <div>
      <div className="col-left">
        <ImageGallery styles={styles} />
      </div>
      <div className="col-right">
        <span className='reviews'><a href="#">Read all 'REPLACE' reviews</a></span>
        <span className='social'>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faPinterest} />
          <FontAwesomeIcon icon={faFacebook} />
        </span>
        <ProductInfo product={productInfo} style={selectedStyle} />
        <StyleSelector styles={styles}/>
        <AddToCart style={selectedStyle}/>
      </div>

    </div>
  )
};

export default ProductDetailOverview;