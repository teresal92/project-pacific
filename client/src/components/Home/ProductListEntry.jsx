import React, { useState, useEffect } from 'react';
import ProductInfo from '../ProductDetailOverview/ProductInfo.jsx';
import { API_KEY } from '../../config/config.js';
import { Card, CardHeader, CardContent, CardMedia } from '@mui/material';

const axios = require('axios');


export default function ProductListEntry(props) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    async function getPhoto() {
      try {
        const res = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${props.product.id}/styles`, {
          headers: { 'Authorization': `${API_KEY}` }
        });
        setPhoto(res.data.results[0].photos[0])
      } catch (err) {
        console.error(err);
      }
    };
    getPhoto();
  }, []);

  return (
    <div>
      <Card className='Category' onClick={(event) => { props.getId(props.product.id) }}>
        <CardHeader title={props.product.name} />
        <CardMedia
        component='img'
        height='300'
        src={photo.url}/>
      </Card>
    </div>
  )
};

