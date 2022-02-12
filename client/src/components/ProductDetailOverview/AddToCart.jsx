import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AddToCart({style}) {
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
        <MenuItem value={'LG'}>LG</MenuItem>
        <MenuItem value={'XL'}>XL</MenuItem>
      </Select>

      <Button variant="contained" startIcon={<ShoppingCartRoundedIcon />}>
        Add to Cart
      </Button>
    </FormControl>
  )
}

export default AddToCart;