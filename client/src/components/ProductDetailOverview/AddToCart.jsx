import React, { useState } from 'react';
import { API_KEY } from '../../config.js';

// MUI components
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const axios = require('axios');

export default function AddToCart({style}) {
  const skus = style.skus;
  const skuList = Object.keys(skus).map(skuId => ({
    id: skuId,
    quantity: skus[skuId].quantity,
    size: skus[skuId].size,
  }));
  const [sku, setSku] = React.useState('');
  const [size, setSize] = React.useState('');
  const [qty, setQty] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [OOS, setOOS] = React.useState(false);

  /* Event Handlers */
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleSizeClick = (e, sku) => {
    setSku(sku);
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  /* On Click of Aadd to cart button */
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (sku && qty) {
      setOpen(false);
      axios
        .post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/cart', { sku_id: sku.id }, { headers: { Authorization: `${API_KEY}` } })
        .then(res => console.log(`Success! ${res}`))
        .catch(err => console.error(err));
    } else {
      setOpen(true);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* Size Dropdown */
  const renderSizeDropdown = () => {
    const availableSkus = skuList.filter(sku => sku.quantity > 0);
    if (availableSkus.length === 0) {
      setOOS(true);
    }

    if (!OOS) {
      return !OOS ? (
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
      ) : (
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
      );
    }
  };

  /* Size Dropdown */
  const renderQtyDropdown = () => {
    if (sku !== '') {
      console.log(sku.quantity);
      const max = (sku.quantity < 15) ? sku.quantity : 15;
      const range = [];
      for (let i = 1; i <= max; i++) {
        range.push(i);
      }
      return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
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
      );
    } else {
      return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
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
      );
    }
  };

  /* Add to Cart Button */
  const renderCartButton = () => {
    return ( !OOS ?
    <div>
      <Button
        variant="contained"
        size="large"
        color="inherit"
        onClick={handleButtonClick}
        startIcon={<ShoppingCartRoundedIcon />}
      >
        Add to Cart
      </Button>
    </div> : null)
  };



  return (
    <form className="add-to-cart-form">
      {open ? <p>Please select a size</p> : <p></p>}
      {renderSizeDropdown()}
      {renderQtyDropdown()}
      {renderCartButton()}
    </form>
  )
};