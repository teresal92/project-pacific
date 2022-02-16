import React, { useState, useEffect } from 'react';

const ImageGallery = ({style}) => {
  const [ photos, setPhotos ] = useState(style.photos);
  const [ defaultImg, setDefaultImg ] = useState(style.photos[0].url);

  return (
    <div className="product-image-gallery">
      {/* Thumbnails list Vertical Scrolling*/}
      {/* Image Carousel Horizontal Scrolling*/}
      <img src={defaultImg} />
    </div>
  )
}

export default ImageGallery;