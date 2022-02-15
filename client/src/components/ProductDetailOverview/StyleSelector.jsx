import React, { useState, useEffect } from 'react';

// MUI
import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function StyleSelector({styles, handleStyleSelector}) {
  const [ selectedStyle, setSelectedStyle ] = useState({});
  const [ isSelected, setIsSelected ] = useState(false);

  // retrieve default for selectedStyle
  useEffect(() => {
    if (styles[0]) {
      setSelectedStyle(styles[0]);
      setIsSelected(true);
    }
  }, [styles])

  const handleClick = (event, style) => {
    setSelectedStyle(style);
    handleStyleSelector(style);
    setIsSelected(true);
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
    <div className='style-selector'>
      <Typography variant="overline" display="block" >
        STYLE > {selectedStyle.name ? selectedStyle.name : 'SELECT STYLE'}
      </Typography>
      <ImageList sx={{ width: 400, height: 250 }} cols={4} rowHeight={100}>
        {styles.map((style, i) =>
          <ImageListItem key={`style-${i}`} onClick={(e) => handleClick(e, style)}>
            <img
              className='select-style-thumbnail'
              name={style.style_id}
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

