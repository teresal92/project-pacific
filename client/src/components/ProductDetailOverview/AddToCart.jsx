import React, { useState, useEffect } from 'react';
import { API_KEY } from '../../config/config.js';
const axios = require('axios');

// MUI components
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function AddToCart({style}) {
  const skus = style.skus;
  const skuList = Object.keys(skus).map(skuId => ({ id: skuId, quantity: skus[skuId].quantity, size: skus[skuId].size }));
  // console.log(`skuList: ${JSON.stringify(skuList)}`);
  const [sku, setSku] = React.useState('');
  const [size, setSize] = React.useState('');
  const [qty, setQty] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [OOS, setOOS] = React.useState(false);

  /* Size Dropdown */
  const renderSizeDropdown = () => {
    let availableSkus = skuList.filter(sku => sku.quantity > 0);
    if (availableSkus.length === 0) {
      setOOS(true);
    }

    if (!OOS) {
      return (
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={size}
            onChange={handleSizeChange}
          >
            <MenuItem value="" disabled>
              <em>Select Size</em>
            </MenuItem>
            {availableSkus.map((sku, i) => (
              <MenuItem
                key={i}
                value={sku.size}
                onClick={(e) => handleSizeClick(e, sku)}
              >
                {sku.size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )
    } else {
      return (
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={size}
            onChange={handleSizeChange}
          >
            <MenuItem disabled value="">
              <em>OOS</em>
            </MenuItem>
          </Select>
        </FormControl>
      )
    }

    // if (availableSkus.length > 0) {
    //   return (
    //     <select className="size-dropdown" value={sku} onChange={handleSizeChange}>
    //       <option value='' disabled>Select Size</option>
    //       {availableSkus.map((sku, i) => <option key={i} value={sku.id}>{sku.size}</option>)}
    //     </select>
    //   )
    // } else {
    //   setOOS(true);
    //   return (
    //     <select value={''} onChange={handleSizeChange} disabled>{'OUT OF STOCK'}</select>
    //   )
    // }
  };

  /* Size Dropdown */
  const renderQtyDropdown = () => {
    if (sku !== '') {
      console.log(sku.quantity);
      let max = ( sku.quantity < 15) ? sku.quantity : 15;
      let range = [];
      for (let i = 1; i <= max; i++) {
        range.push(i);
      };
      return (
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="demo-simple-select-label">Select Qty</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={qty}
            onChange={handleQtyChange}
          >
            {range.map((num, i) => (
            <MenuItem
              key={i}
              value={num}
            >
              {num}
            </MenuItem>
            ))}
          </Select>
        </FormControl>
      )
    } else {
      return (
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="demo-simple-select-label">Select Qty</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={qty}
            onChange={handleQtyChange}
          >
            <MenuItem disabled value="">
              <em>-</em>
            </MenuItem>
          </Select>
        </FormControl>
      )
    }
    // return (
    //     <select value={qty} onChange={handleQtyChange}>
    //       {range.map((num, i) => <option key={i} value={num}>{num}</option>)}
    //     </select>
    //   )
    // } else {
    //   return (
    //     <select value={qty} onChange={handleQtyChange} disabled>
    //       <option value=''>-</option>
    //     </select>
    //   )
    // }
  };

  /* Add to Cart Button */
  const renderCartButton = () => {
    return ( !OOS ?
    <div>
      <Button
        onClick={handleButtonClick}
        variant="contained"
        startIcon={<ShoppingCartRoundedIcon />}
      >
        Add to Cart
      </Button>
    </div> : null)
    // return ( (size !== '') ? <input type="submit" value="Add to Cart" onClick={handleButtonClick} /> : null)
  }

  // set state for sku and size based on sku id, then pass sku id to showQtyDropdown
  const handleSizeChange = (e) => {
    let size = e.target.value;
    setSize(size);
  };

  const handleSizeClick = (e, sku) => {
    console.log(sku);
    setSku(sku);
  }

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  /* On Submit of add to cart button */
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (sku && qty) {
      setOpen(false);
      axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/cart', { 'sku_id': sku.id }, { headers: { 'Authorization': `${API_KEY}` } })
      .then( res => console.log(`Success! ${res}`))
      .catch( err => console.error(err));
    } else {
      setOpen(true);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <form className="add-to-cart-form">
      {renderSizeDropdown()}
      {renderQtyDropdown()}
      {renderCartButton()}
    </form>
  )
};