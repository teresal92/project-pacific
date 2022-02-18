import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ImageGallery({style}) {
  const [photos, setPhotos] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (style.photos && style.photos[0]) {
      setPhotos(style.photos);
    }
  }, [style]);

  const renderView = () => {
    // default view
    if (!isExpanded) {
      return (
        <img className="selImage" src={`${style.photos[currentIdx].url}`} alt="" />
      );
    }
    // TODO: create expanded view
    return (
      <img className="selImage" src={`${style.photos[currentIdx].url}`} alt="" />
    );
  };

  const handleSelectedImage = (e, i) => {
    setCurrentIdx(i);
  };

  // prev img
  const handlePrevImg = () => {
    setCurrentIdx(currentIdx === 0 ? photos.length - 1 : currentIdx - 1);
  };

  // next img
  const handleNextImg = () => {
    setCurrentIdx(currentIdx === photos.length - 1 ? 0 : currentIdx + 1);
  };

  const handleScrollUp = () => {
    if (photos.length > 7) {
      // be able to scroll to previous
    }
  };

  const handleScrollDown = () => {
    if (photos.length > 7) {
      // be able to scroll to next
    }
  };

  return (
    <div className="img-gallery-carousel-container">
      <div className="img-gallery-carousel-overlay">
        <ExpandLessIcon
          className="img-gallery-carousel-controls img-gallery-carousel-controls-up"
          // onClick={handlePrevImg}
          fontSize="large"
        />
        <ImageList sx={{ width: 70, height: 490 }} cols={1} rowHeight={70}>
          {photos.map((photo, i) => (
            <ImageListItem
              key={`photo-${i}`}
              onClick={(e) => handleSelectedImage(e, i)}
            >
              <img
                style={{
                  borderBottom: (currentIdx === i) ? '3px solid #900000' : null,
                  opacity: (currentIdx === i) ? '0.8' : '1',
                }}
                className="img-gallery-carousel-thumbnail"
                name={i}
                src={`${photo.thumbnail_url}?w=70&h=70&fit=crop&auto=format`}
                srcSet={`${photo.thumbnail_url}?w=70&h=70&fit=crop&auto=format&dpr=2 2x`}
                alt={`${i}`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <ExpandMoreIcon
          className="img-gallery-carousel-controls img-gallery-carousel-controls-down"
          // onClick={handleNextImg}
          fontSize="large"
        />
      </div>
      <div className="img-gallery-carousel-inner">
        {(currentIdx !== 0) ? (
          <ChevronLeftIcon
            className="img-gallery-carousel-controls img-gallery-carousel-controls-left"
            onClick={handlePrevImg}
            fontSize="large"
          />
        ) : <div className="img-gallery-carousel-controls-alt" /> }
        {renderView()}
        {currentIdx !== photos.length - 1 ? (
          <ChevronRightIcon
            className="img-gallery-carousel-controls img-gallery-carousel-controls-right"
            onClick={handleNextImg}
            fontSize="large"
          />
        ) : <div className="img-gallery-carousel-controls-alt" /> }
      </div>
    </div>
  );
}

export default ImageGallery;
