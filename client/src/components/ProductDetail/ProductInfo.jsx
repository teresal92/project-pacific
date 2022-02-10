import React, { useState } from 'react';

function ProductInfo({product}) {

  return (
    <div className="product-info">
      <span>Social Media icons</span>
      <h3>{product.category}</h3>
      <h1>{product.name}</h1>
      <span>{product.default_price}</span>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductInfo;