import React, { useState } from 'react';

function ProductImageGallery({styles}) {
  console.log('styles: ', styles)

  function showImage() {
    if (styles) {
      console.log(styles);
    }
  };

  showImage();
  return (
    <div className="product-image-gallery">

    </div>
  )
}

export default ProductImageGallery;

{// <img src={styles.results[0].photos[0].url}/>