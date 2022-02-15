import React, { useState, useEffect } from 'react';

// MUI components
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// cart : [
//     {
//       "sku_id": 1,
//       "count": 2
//   },
//   {
//       "sku_id": 3,
//       "count": 1
//   },
//   {
//       "sku_id": 5,
//       "count": 33
//   },
//   //...
// ]

export default function AddToCart({ style }) {
  const skus = Object.values(style.skus);
  const [sku, setSku] = React.useState('');
  const [size, setSize] = React.useState('');
  const [qty, setQty] = React.useState('');

  // only list sizes that are currently instock for style selected
  // if no remaining stock, dropdown should become inactive and read 'OUT OF STOCK'

  // when collapsed, dropdown should show only currently selected size
  // by default: dropdown should show 'Select Size'

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  }

  const handleQtyChange = (event) => {
    setQty(event.target.value);
  }

  // on submit of add to cart button
  // adds product (style, size, qty) to cart by posting to /cart with sku_id as param
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted!!!! ${size}`)
  }

  return (
    <form className="add-to-cart-form" onSubmit={onSubmit}>
      <select value={size} onChange={handleSizeChange} >
        <option selected value=''>Select Size</option>
        {skus.map((sku, i) => <option key={`size-${i}`} value={sku.size}>{sku.size}</option>)}
      </select>
      <select id="qty-dropdown">
        <option disabled selected value=''>-</option>
        {skus.map((sku, i) => <option key={`qty-${i}`} value={sku.quantity}>{sku.quantity}</option>)}
      </select>
      <input type="submit" value="Add to Cart"></input>
    </form>
  )
}

    // MUI form
    // <div>
    //   <FormControl sx={{ m: 1, minWidth: 120 }} >
    //     <InputLabel id="demo-simple-select-label">
    //       Select Size
    //     </InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       name="size"
    //       value={size}
    //       label="Size"
    //       onChange={handleSizeChange}
    //     >
    //       <MenuItem value=''><em>Select Size</em></MenuItem>
    //       {skus.map((sku, i) => <MenuItem key={`size-${i}`} value={sku.size}>{sku.size}</MenuItem>)}
    //     </Select>
    //   </FormControl>
    //   <FormControl sx={{ m: 1, minWidth: 120 }}>
    //     <InputLabel id="demo-simple-select-label">
    //       Select Qty
    //     </InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       name="size"
    //       value={qty}
    //       label="Qty"
    //       onChange={handleQtyChange}
    //     >
    //       <MenuItem value=''><em>Select Qty</em></MenuItem>
    //       {skus.map((sku, i) => <MenuItem key={`qty-${i}`} value={sku.quantity}>{sku.quantity}</MenuItem>)}
    //     </Select>
    //   </FormControl>
    //   <div>
    //     <Button variant="contained" startIcon={<ShoppingCartRoundedIcon />}>
    //       Add to Cart
    //     </Button>
    //   </div>
    // </div>