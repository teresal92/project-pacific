import React, { useState, useEffect } from 'react';

// MUI
import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


// TODO:
  // Conditionally render overlay checkbox on top right of thumbnail when style is selected

function StyleSelector({styles, handleStyleSelector}) {
  const [ selectedStyle, setSelectedStyle ] = useState([]);
  const [ isSelected, setIsSelected ] = useState(false);
  // after refactoring to pass down styles, should be able to access default
  // const [ selectedStyle, setSelectedStyle ] = useState(styles[0]);

  const handleClick = (event, style) => {
    setSelectedStyle(style);
    handleStyleSelector(style);
    setIsSelected(!isSelected);
  };

  const showSelected = (style) => {
    if (isSelected && style.style_id === selectedStyle.style_id) {
      return (
        <div className='overlay'>
          <CheckCircleOutlineIcon />
        </div>
      )
    }
  };

  return (
    <div>
      <Typography variant="overline" display="block" >
        STYLE > {selectedStyle.name ? selectedStyle.name : 'SELECT STYLE'}
      </Typography>
      <ImageList sx={{ width: 400, height: 250 }} cols={4} rowHeight={100}>
        {styles.map((style) =>
          <ImageListItem key={`style-id-${style.style_id}`} onClick={(e) => handleClick(e, style)}>
            <img
              className='thumbnail'
              name={style.name}
              src={`${style.photos[0].thumbnail_url}?w=100&h=100&fit=crop&auto=format`}
              srcSet={`${style.photos[0].thumbnail_url}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
              alt={style.name}
              loading='lazy'
            />
            {showSelected(style)}
          </ImageListItem>
        )}
      </ImageList>
      </div>
  );
}

export default StyleSelector;

