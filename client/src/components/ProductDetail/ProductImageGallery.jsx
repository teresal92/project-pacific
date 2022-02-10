import React, { useState, useEffect } from 'react';

function ProductImageGallery({styles}) {
  const [ defaultImg, setDefaultImg ] = useState('https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

  console.log('styles: ', styles);

  return (
    <div className="product-image-gallery">
      <img src={defaultImg}/>
    </div>
  )
}

export default ProductImageGallery;