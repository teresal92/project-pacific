import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

function ProductInfo({product, style}) {

  function flagOnSale() {
    // check if styles.results.sale_price is not null
    if (style.sale_price !== null) {
      return (
        <div>
          <span
            className='org-price'
            style={{'textDecoration': 'line-through'}}>
            {product.default_price}
          </span>
          <span className='sale-price'>{style.sale_price}</span>
        </div>
      )
    } else {
      return (
        <span className='org-price'>
          {product.default_price}
        </span>
      )
    }
  }

  return (
    <div>
      <Typography variant="overline" display="block" gutterBottom>
        {product.category}
      </Typography>
      <Typography variant='h4' component='div'>
        {product.name}
      </Typography>
      {flagOnSale()}
      <Typography variant="body1" gutterBottom>
        {product.description}
      </Typography>
    </div>
  )
};

export default ProductInfo;