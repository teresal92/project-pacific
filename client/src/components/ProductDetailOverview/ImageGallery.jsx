import React, { useState, useEffect } from 'react';

const ImageGallery = ({style}) => {
  const [ photos, setPhotos ] = useState(style.photos);
  const [ defaultImg, setDefaultImg ] = useState(style.photos[0].url);

  const renderDefaultView = () => {


  }


  const renderExpandedView = () => {


  }


  return (
    <div className="image-gallery">
      {/* Thumbnails list Vertical Scrolling*/}
      {/* Image Carousel Horizontal Scrolling*/}
      <img className='selImage' height='500' src={defaultImg} />
    </div>
  )
}

export default ImageGallery;