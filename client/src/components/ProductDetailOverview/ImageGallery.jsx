import React, { useState, useEffect, createRef } from 'react';
import { ImageList, ImageListItem, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ImageGallery({style}) {
  const [photos, setPhotos] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const carouselImgRef =

  useEffect(() => {
    if (style.photos && style.photos[0]) {
      setPhotos(style.photos);
      setCurrentIdx(0);
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
    // setIsSelected(true);
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
  }

  const handleScrollDown = () => {
    if (photos.length > 7) {
      // be able to scroll to next
    }
  }

  // conditionally render bottom bar under selected thumbnail
  // style={{borderBottom: (isSelected) ? '3px solid #121212' : null }}
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
                className={currentIdx === i ? 'img-gallery-carousel-thumbnail-selected'
                  : 'img-gallery-carousel-thumbnail'
                }
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
        ) : <div></div>}
        {renderView()}
        {currentIdx !== photos.length - 1 ? (
          <ChevronRightIcon
            className="img-gallery-carousel-controls img-gallery-carousel-controls-right"
            onClick={handleNextImg}
            fontSize="large"
          />
        ) : <div></div> }
      </div>
    </div>
  );
}

export default ImageGallery;
