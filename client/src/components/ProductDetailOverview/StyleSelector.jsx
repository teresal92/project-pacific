import React, { useState, useEffect } from 'react';
import StyleSelectorEntry from './StyleSelectorEntry.jsx';

function StyleSelector({styles}) {

  return (
    <div className="style-selector">
      {styles.map((style, i) => <StyleSelectorEntry style={style} key={`style-selector-key-${i}`} />)}
    </div>
  )
}

export default StyleSelector;