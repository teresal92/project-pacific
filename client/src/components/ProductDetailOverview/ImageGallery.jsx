import React, { useState, useEffect, useRef } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

function ImageGallery({ style, isExpanded, handleExpandedView }) {
  const [photos, setPhotos] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  // coordinates of mouse cursor
  const [x, setX] = useState(null);
  const [y, setY] = useState(null)
  const _x = 0;
  const _y = 0;

  const thumbnailImgRef = useRef();

  useEffect(() => {
    if (style.photos && style.photos[0]) {
      setPhotos(style.photos);
    }
  }, [style]);

  const handleSelImageChange = (e, i) => {
    setCurrentIdx(i);
  };

  const handleSelImageClick = () => {
    handleExpandedView(!isExpanded);
  };

  const handleExpandedImageClick = () => {
    setIsZoomed(!isZoomed);
  }

  const handleMouseMove = (e) => {
    // x: how far cursor is from left of an element
    setX(e.pageX);
    // y: how far cursor is from top of an eleent
    setY(e.pageY);
    console.log(`x: ${x}, y: ${y}`);
  }


  // prev img
  const handlePrevImg = () => {
    setCurrentIdx(currentIdx === 0 ? photos.length - 1 : currentIdx - 1);
    if (currentIdx > 7) {
      thumbnailImgRef.current.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
  };

  // next img
  const handleNextImg = () => {
    setCurrentIdx(currentIdx === photos.length - 1 ? 0 : currentIdx + 1);
    if (currentIdx > 7) {
      thumbnailImgRef.current.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
  };

  const handleDotClick = (i) => {
    setCurrentIdx(i);
  }

  /* Views */
  const renderDefaultView = () => (
      <div className="img-gallery-carousel-container">
        <div className="img-gallery-carousel-thumbnail-overlay">
          <ExpandLessIcon
            className="img-gallery-carousel-controls img-gallery-carousel-controls-up"
            fontSize="large"
            onClick={handlePrevImg}
          />
          <ImageList sx={{ width: 70, height: 490 }} cols={1} rowHeight={70}>
            {photos.map((photo, i) => (
              <ImageListItem
                key={`photo-${i}`}
                onClick={(e) => handleSelImageChange(e, i)}
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
                  ref={thumbnailImgRef}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <ExpandMoreIcon
            className="img-gallery-carousel-controls img-gallery-carousel-controls-down"
            fontSize="large"
            onClick={handleNextImg}
          />
        </div>
        <div className="img-gallery-carousel-inner">
          {(currentIdx !== 0) ? (
            <ChevronLeftIcon
              className="img-gallery-carousel-controls img-gallery-carousel-controls-left"
              onClick={handlePrevImg}
              fontSize="large"
            />
          ) : <div className="img-gallery-carousel-controls-alt" />}
          <img
            className="selImage"
            src={`${style.photos[currentIdx].url}`}
            alt="selected"
            onClick={handleSelImageClick}
          />
          {currentIdx !== photos.length - 1 ? (
            <ChevronRightIcon
              className="img-gallery-carousel-controls img-gallery-carousel-controls-right"
              onClick={handleNextImg}
              fontSize="large"
            />
          ) : <div className="img-gallery-carousel-controls-alt" />}
        </div>
      </div>

  );

  const renderExpandedView = () => (
    <div className="img-gallery-carousel-expanded-overlay">
      <CloseIcon
        className="img-gallery-carousel-controls img-gallery-carousel-container-expanded-close"
        fontSize="large"
        onClick={handleSelImageClick}
        onKeyPress={handleSelImageClick}
      />
      <div className="img-gallery-carousel-inner">
        <ChevronLeftIcon
            className="img-gallery-carousel-controls img-gallery-carousel-controls-left-expanded"
            onClick={handlePrevImg}
            fontSize="large"
            style={{ display: isZoomed ? 'none' : 'block' }}
          />
        <div className="img-expanded-container">
          <img
            className="selImage-expanded"
            src={`${style.photos[currentIdx].url}`}
            alt="selected"
            onClick={handleExpandedImageClick}
            onMouseMove={handleMouseMove}
            // add custom minus sign for isZoomed
            style={{
              cursor: isZoomed ? 'url(client/dist/images/add.png) 24 24,auto'
              : 'url(client/dist/images/remove.png) 24 24, auto',
              '-webkit-transform': isZoomed ? 'scale(2.5)' : 'scale(1)',
              '-ms-transform': isZoomed ? 'scale(2.5)' : 'scale(1)',
              transform: isZoomed ? 'scale(2.5)' : 'scale(1)',
              transition: 'transform 0.4s ease-out 0s',
            }}
          />
        </div>

        <ChevronRightIcon
          className="img-gallery-carousel-controls img-gallery-carousel-controls-right"
          onClick={handleNextImg}
          fontSize="large"
          style={{display: isZoomed ? 'none' : 'block'}}
        />
        <div
          className="img-gallery-carousel-dots"
          style={{display: isZoomed ? 'none' : 'block'}}
        >
          {photos.slice().map((pos, i) => (
              <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={i === currentIdx ? 'dot active' : 'dot'}
              />
          ))}
        </div>
      </div>
    </div>
  );

  return !isExpanded ? (
    renderDefaultView()
  ) : (
    renderExpandedView()
  );
}

export default ImageGallery;
