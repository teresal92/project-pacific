import React, { useState, useEffect } from 'react';

// MUI
import { ImageList, ImageListItem, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function StyleSelector({styles, selectedStyle, handleStyleSelector}) {
  const [ isSelected, setIsSelected ] = useState(false);

  useEffect(() => {
    if (selectedStyle) {
      setIsSelected(true);
    }
  }, [selectedStyle])

  const handleClick = (event, style) => {
    // console.log(`clicked on ${JSON.stringify(style)}`)
    handleStyleSelector(style);
    setIsSelected(true);
  };

  const showSelected = (style) => {
    if (isSelected && style.style_id === selectedStyle.style_id) {
      return (
        <div className='select-style-overlay'>
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

