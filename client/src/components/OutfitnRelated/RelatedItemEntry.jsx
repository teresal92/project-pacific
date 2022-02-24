import React, { useState, useEffect } from 'react';
import ProductInfo from '../ProductDetailOverview/ProductInfo.jsx';
import { Card, CardHeader, CardContent, CardMedia } from '@mui/material';

const axios = require('axios');


export default function RelatedItemEntry(props) {
  const [productInfo, setProductInfo] = useState([]);
  const [styles, setStyles] = useState([]);
  const [compareInfo, setCompareInfo] = useState([]);

  useEffect(() => {
    const getProductInfo = axios.get(`/api/products/${props.item}`);
    const getStyles = axios.get(`/api/products/${props.item}/styles`);
    const getCompareInfo = axios.get(`/api/products/${props.comparison}`);

    Promise.all([getProductInfo, getStyles, getCompareInfo])
      .catch(err => console.error(err))
      .then(res => {
        setProductInfo(res[0].data);
        setStyles(res[1].data.results[0].photos[0]);
        setCompareInfo(res[2].data);
      })
  }, []);

  return (
    <div>
      <Card className='relativeItem'>
        <CardHeader title={productInfo.name} />
        <CardMedia
        component='img'
        height='200'
        alt='NO IMAGE'
        src={styles.url}/>
      </Card>
    </div>
  )
};