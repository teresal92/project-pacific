import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

function ProductInfo({product, style}) {

  function flagOnSale() {
    // check if styles.results.sale_price is not null
    if (style.sale_price !== null) {
      return <span className='sale-price'>{style.sale_price}</span>
    } else {

    }
  }

  return (
    <div>
      <Typography variant="overline" display="block" gutterBottom>
        {product.category}
      </Typography>
      <Typography variant='h3' component='div'>
        {product.name}
      </Typography>
      <span
        className='org-price'
        style={{'textDecoration': 'line-through'}}>
        {product.default_price}
      </span>
      {flagOnSale()}
      <Typography variant="body1" gutterBottom>
          {product.description}
      </Typography>
    </div>
  )
};

export default ProductInfo;