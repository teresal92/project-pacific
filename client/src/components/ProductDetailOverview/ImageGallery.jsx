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
  const [start, setStart] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const expandedImgRef = useRef(null);

  useEffect(() => {
    if (style.photos && style.photos[0]) {
      setPhotos(style.photos);
    }
  }, [style]);

  const handleSelImageChange = (i) => {
    setCurrentIdx(i);
  };

  const handleSelImageClick = () => {
    handleExpandedView(!isExpanded);
  };

  const handleExpandedImageClick = () => {
    if (isZoomed) {
      exitZoom();
      setIsZoomed(!isZoomed);
    } else {
      setIsZoomed(!isZoomed);
    }
  }

  const generateZoom = (e) => {
    let scale = 2.5;
    let posX = e.nativeEvent.clientX - expandedImgRef.current.offsetLeft;
    let posY = e.nativeEvent.clientY - expandedImgRef.current.offsetTop
    let mWidth = expandedImgRef.current.offsetWidth;
    let mHeight = expandedImgRef.current.offsetHeight;
    posX = posX / mWidth * 100;
    posY = posY / mHeight * 100;

    expandedImgRef.current.style.transform = `translate(-${posX}%, -${posY}%) scale(${scale})`;
  }

  const exitZoom = () => {
    let scale = 1;
    expandedImgRef.current.style.transform = `scale(${scale})`;
    expandedImgRef.current.style.margin = `auto`;
  }

  // prev img
  const handlePrevImg = () => {
    setCurrentIdx(currentIdx === 0 ? photos.length - 1 : currentIdx - 1);
  };

  // next img
  const handleNextImg = () => {
    setCurrentIdx(currentIdx === photos.length - 1 ? 0 : currentIdx + 1);
  };

  const handleDotClick = (i) => {
    setCurrentIdx(i);
  }

  /* Views */
  const renderDefaultView = () => (
      <div className="img-gallery-carousel-container" data-testid="defaultImageView">
        <div className="img-gallery-carousel-thumbnail-overlay" data-testid="defaultImageOverlay">
          <ExpandLessIcon
            className="img-gallery-carousel-controls img-gallery-carousel-controls-up"
            fontSize="large"
            onClick={handlePrevImg}
          />
          <ImageList sx={{ width: 70, height: 490 }} cols={1} rowHeight={70}>
            {photos.slice(start, start + 7).map((photo, i) => (
              <ImageListItem
                key={`photo-${i}`}
                onClick={() => handleSelImageChange(start + i)}
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
    <div className="img-gallery-carousel-expanded-overlay" data-testid="expandedImageView">
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
        <div
          className="img-expanded-container"
        >
          <img
            className={isZoomed ? "selImage-expanded-zoom" : "selImage-expanded"}
            src={`${style.photos[currentIdx].url}`}
            alt="selected"
            onClick={handleExpandedImageClick}
            ref={expandedImgRef}
            onMouseMove={isZoomed ? generateZoom : () => {}}
          />
        </div>
        <ChevronRightIcon
          className="img-gallery-carousel-controls img-gallery-carousel-controls-right"
          onClick={handleNextImg}
          fontSize="large"
          style={{display: isZoomed ? 'none' : 'block'}}
        />
        <div
          data-testid="expandedImageDots"
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
