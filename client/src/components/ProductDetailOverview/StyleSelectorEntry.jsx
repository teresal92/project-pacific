import React, { useState } from 'react';

function StyleSelectorEntry({style}) {

  console.log('style: ', style.photos[0].thumbnail_url);
  return (
    <img className="style-thumbnail" src={style.photos[0].thumbnail_url} />
  )
}

export default StyleSelectorEntry;