import React, { useState, useEffect } from 'react';
import { API_KEY } from '../../config/config.js';
const axios = require('axios');

// MUI components
// import Button from '@mui/material/Button';
// import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

export default function AddToCart({style}) {
  const skus = style.skus
  const skuIds = Object.keys(skus);
  const skuList = skuIds.map(skuId => ({ id: skuId, quantity: skus[skuId].quantity, size: skus[skuId].size }));
  // console.log(`skuList: ${JSON.stringify(skuList)}`);

  const [sku, setSku] = React.useState('');
  const [size, setSize] = React.useState('');
  const [qty, setQty] = React.useState('');

  /* Size Dropdown
   * only list sizes that are currently instock for style selected
   * if no remaining stock, dropdown should become inactive and read 'OUT OF STOCK'
   * when collapsed, dropdown should show only currently selected size
   * by default: dropdown should show 'Select Size'
   */
  // TODO: why is sku working in select value instead of size?
  const showSizeDropdown = () => {
    let availableSkus = skuList.filter(sku => sku.quantity > 0);

    return ((availableSkus.length > 0) ? (
      <select value={sku} onChange={handleSizeChange}>
        <option value=''>Select Size</option>
        {availableSkus.map((sku, i) => <option key={i} value={sku.id}>{sku.size}</option>)}
      </select>
    ) : (
      <select value={''} onChange={handleSizeChange} disabled>{'OUT OF STOCK'}</select>
    ))
  };

  /* Size Dropdown
   * options: list range from 1-max.
   * max is either qty of sku in stock or hard limit of 15
   * when collapsed, dropdown should show only currently selected size
   * by default: if size not selected, show '-' and dropdown will be disabled
   * if size is selected, dropdown should default to 1
   */
  const showQtyDropdown = () => {
    // if size is selected
    // options will be from 1 - either qty of sku in stock or 15
    if (sku) {
      let max = (skus[sku].quantity < 15) ? skus[sku].quantity : 15;
      let range = [];
      for (let i = 1; i <= max; i++) {
        range.push(i);
      };
      console.log(`range ${range}`);

      return (
        <select value={qty} onChange={handleQtyChange}>
          {range.map((num, i) => <option key={i} value={num}>{num}</option>)}
        </select>
      )
    } else {
      return (
        <select value={qty} onChange={handleQtyChange} disabled>
          <option value=''>-</option>
        </select>
      )
    }
  };

  // set state for sku and size based on sku id, then pass sku id to showQtyDropdown
  const handleSizeChange = (event) => {
    let id = event.target.value;
    let size = skus[id].size;
    setSize(size);
    setSku(id);
  };

  const handleQtyChange = (event) => {
    setQty(event.target.value);
  };

  /* On Submit of add to cart button
   * add sku to cart by posting to '/cart' with sku_id as param
   */
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(`Submitted!! ${sku}`);
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/cart', { 'sku_id': sku }, { headers: { 'Authorization': `${API_KEY}` } })
      .then( res => console.log(`Success! ${res}`))
      .catch( err => console.error(err));
  };

  return (
    <form className="add-to-cart-form" onSubmit={onSubmit}>
      {showSizeDropdown()}
      {showQtyDropdown()}
      <input type="submit" value="Add to Cart"></input>
    </form>
  )
};

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