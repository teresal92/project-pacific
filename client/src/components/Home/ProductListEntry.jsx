import React, { useState, useEffect } from 'react';
import ProductInfo from '../ProductDetailOverview/ProductInfo.jsx';
import { API_KEY } from '../../config/config.js';
import { Card, CardHeader, CardContent, CardMedia } from '@mui/material';

const axios = require('axios');


export default function ProductListEntry(props) {

  return (
    <div>
      <Card className='Category' onClick={(event) => {props.getId(props.product.id)}}>
        <CardHeader title={props.product.name} />
        <CardContent />
      </Card>
    </div>
  )
};

