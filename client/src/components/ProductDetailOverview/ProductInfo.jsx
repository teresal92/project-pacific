import React, { useState, useEffect } from 'react';

function ProductInfo({product, style}) {

  function flagOnSale() {
    // check if styles.results.sale_price is not null
    if (style.sale_price !== null) {
      return <span className='sale-price'>{style.sale_price}</span>
    } else {

    }
  }

  return (
    <div className="product-info">
      <h3>{product.category}</h3>
      <h1>{product.name}</h1>
      <span
        className='org-price'
        style={{'textDecoration': 'line-through'}}>
        {product.default_price}
      </span>
      {flagOnSale()}
      <p className='product-description'>{product.description}</p>
    </div>
  )
};

export default ProductInfo;