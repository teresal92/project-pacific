import React, { useState, useEffect } from 'react';
// import StyleSelectorEntry from './StyleSelectorEntry.jsx';

// MUI
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

function StyleSelector({styles}) {

  return (
    <div>
      <Typography variant="overline" display="block" >
        STYLE > SELECTED STYLE
      </Typography>
      <ImageList sx={{ width: 500, height: 250 }} cols={4} rowHeight={100}>
        {styles.map((style) => (
        <ImageListItem key={`style-id-${style.style_id}`}>
          <img
            src={`${style.photos[0].thumbnail_url}?w=100&h=100&fit=crop&auto=format`}
            srcSet={`${style.photos[0].thumbnail_url}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
            alt={style.name}
            loading='lazy'
          />
        </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default StyleSelector;