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
  const skus = style.skus
  const skuIds = Object.keys(skus);

  let skuList = skuIds.map(skuId => ({ id: skuId, quantity: skus[skuId].quantity, size: skus[skuId].size }));
  // console.log(`skuList: ${JSON.stringify(skuList)}`);

  const [sku, setSku] = React.useState('');
  const [size, setSize] = React.useState('');
  const [qty, setQty] = React.useState('');

  // TODO: track sku_id and set size/qty state by sku_id?
  /* Size Dropdown
   * only list sizes that are currently instock for style selected
   * if no remaining stock, dropdown should become inactive and read 'OUT OF STOCK'
   * when collapsed, dropdown should show only currently selected size
   * by default: dropdown should show 'Select Size'
   */

  let availableSkus = skuList.filter(sku => sku.quantity > 0);
  const showSizeDropdown = () => {
    return ((availableSkus.length > 0) ? (
      <select value={size} onChange={handleSizeChange}>
        <option value=''>Select Size</option>
        {availableSkus.map((sku, i) => <option key={`size-${i}`} value={sku.id}>{sku.size}</option>)}
      </select>
    ) : (
      <select value={''} onChange={handleSizeChange} disabled>{'OUT OF STOCK'}</select>
    ))
  }

  // const showSizeDropdown = () => {
  //   return ((availableSizes.length > 0) ? (
  //     <select value={size} onChange={handleSizeChange}>
  //       <option value=''>Select Size</option>
  //       {availableSizes.map((sku, i) => <option key={`size-${i}`} value={i}>{sku.size}</option>)}
  //     </select>
  //   ) : (
  //     <select value={''} onChange={handleSizeChange} disabled>{'OUT OF STOCK'}</select>
  //   ))
  // }

  /* Size Dropdown
   * options: list range from 1-max.
   * max is either qty of sku in stock or hard limit of 15
   * when collapsed, dropdown should show only currently selected size
   * by default: if size not selected, show '-' and dropdown will be disabled
   * if size is selected, dropdown should default to 1
   */
  const showQtyDropdown = (skuId) => {
    // if size is selected, sku id will be passed in
    // options will be from 1 - either qty of sku in stock or 15
      // default to 1
    if (skuId) {
      // look up sku id associated with size and look up qty
      // iterate from 1 - qty if qty is less than 15
      <select value={qty} onChange={handleQtyChange}>
        <option value=''>-</option>
      </select>
    } else {
      return (
        <select value={qty} onChange={handleQtyChange} disabled>
          <option value='' >-</option>
        </select>
      )
    }
  }

  const handleSizeChange = (event) => {
    setSize(event.target.value);
    // showQtyDropdown(styleId)
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
      {showSizeDropdown()}
      {showQtyDropdown()}
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