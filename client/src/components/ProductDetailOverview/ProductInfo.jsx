import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

function ProductInfo({product, style}) {

  function flagOnSale() {
    return ((style.sale_price !== null) ? (
      <div>
        <span
          className='org-price'
          style={{'textDecoration': 'line-through'}}>
          {product.default_price}
        </span>
        <span className='sale-price'>{style.sale_price}</span>
      </div>
    ) : (
      <span className='org-price'>
          {product.default_price}
      </span>
    ));
  }

  return (
    <div className="product-info" data-testid="productInfo">
      <Typography variant="overline" display="block" gutterBottom>
        {product.category}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      {flagOnSale()}
      <Typography variant="body1" mt={2} gutterBottom>
        {product.description}
      </Typography>
    </div>
  );
}

export default ProductInfo;
