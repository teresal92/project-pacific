import React, { useState, useEffect } from 'react';

// MUI components
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AddToCart({style}) {

  // TODO: set default to first size
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  }

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Size
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Size"
          onChange={handleChange}
        >
          <MenuItem value={'xs'}>XS</MenuItem>
          <MenuItem value={'sm'}>SM</MenuItem>
          <MenuItem value={'md'}>MD</MenuItem>
          <MenuItem value={'lg'}>LG</MenuItem>
          <MenuItem value={'xl'}>XL</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" startIcon={<ShoppingCartRoundedIcon />}>
        Add to Cart
      </Button>
    </div>
  )
}

