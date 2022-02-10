import React, { useState } from 'react';

function ProductInfo({product, styles}) {

  const [ onSale, setOnSale ] = useState(false);


  // check if styles.results.sale_price is not null
    // setOnSale to true

  // if onSale is true
    // conditionally render sale price in red and original price should be crossed out

  return (
    <div className="product-info">
      <h3>{product.category}</h3>
      <h1>{product.name}</h1>
      <span>{product.default_price}</span>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductInfo;