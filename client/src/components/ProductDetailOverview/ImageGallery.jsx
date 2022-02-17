import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function ImageGallery({style}) {
  const [photos, setPhotos] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  // TODO: when different style is selected, update the default image;
  useEffect(() => {
    if (style.photos) {
      setPhotos(style.photos);
    }
    // setCurrentIdx(style.photos[0].url);
  }, [style]);


  const renderDefaultView = () => {
    // console.log(`${style.photos}`)
    // console.log(`${JSON.stringify(style.photos[currentIdx].url)}`)
    return (
      <img className="selImage" src={`${style.photos[currentIdx].url}`} alt="" />
    );
  }


  // By default, the first image in the set will be displayed as the main image. This image will match the smaller thumbnail image shown first.
  // When switching between styles, the index of the image currently selected should be maintained when the gallery updates for the new style.
  // Clicking on any thumbnail should update the main image to match that shown in the thumbnail clicked.
  // The thumbnail corresponding to the image currently selected as the main image should be highlighted to indicate the current selection.

  const renderExpandedView = () => {


  }

  const handleThumbnailClick = (e, i) => {
    setCurrentIdx(i);
    setIsSelected(true);
  }

  const handleVerticalScrollUp = () => {

  }

  const handleVerticalScrollDown = () => {

  }


  const handleHorizontalScrollRight = () => {

  }

  const handleHorizontalScrollLeft = () => {

  }



  return (
    <div className="image-gallery">
      <div className="img-thumbnail-overlay">
        <ImageList sx={{ width: 70, height: 490 }} cols={1} rowHeight={70}>
          {photos.map((photo, i) =>
            <ImageListItem
              key={`photo-${i}`}
              style={{borderBottom: (isSelected) ? '3px solid #121212' : null }}
              onClick={(e) => handleThumbnailClick(e, i)}
            >
              <img
                className='img-thumbnail'
                name={i}
                src={`${photo.thumbnail_url}?w=70&h=70&fit=crop&auto=format`}
                srcSet={`${photo.thumbnail_url}?w=70&h=70&fit=crop&auto=format&dpr=2 2x`}
                alt={`${i}`}
                loading='lazy'
              />
            </ImageListItem>
          )}
        </ImageList>
      </div>
      {renderDefaultView()}
      {/* <img className="selImage" height="500" src={currentImg} alt="" /> */}
    </div>
  );
}

export default ImageGallery;
