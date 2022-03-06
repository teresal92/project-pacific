import React, { useState } from 'react';

// MUI components
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const axios = require('axios');

const useStyles = makeStyles({
  cartButton: {
    background: '#121212',
    border: 0,
    borderRadius: 20,
    padding: '0 30px',
    height: 48,
    color: 'white',
    "&:hover": {
      color: '#121212',
    }
  }
})

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
  const classes = useStyles();

  /* Event Handlers */
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleSizeClick = (sku) => {
    setSku(sku);
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  /* On Click of Add to cart button */
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (sku && qty) {
      setOpen(false);
      axios
        .post(`/api/cart/${sku.id}`)
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
                onClick={() => handleSizeClick(sku)}
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
      const max = (sku.quantity < 15) ? sku.quantity : 15;
      const range = [];
      for (let i = 1; i <= max; i++) {
        range.push(i);
      }
      return (
        <FormControl sx={{ m: 1, width: 0.25 }}>
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
        <FormControl sx={{ m: 1, width: 0.25 }}>
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
    return (!OOS ?
      <div data-testid="addToCartButton">
        <Button
          variant="contained"
          size="large"
          color="inherit"
          onClick={handleButtonClick}
          sx={{ mx: 1, my: 2, minWidth: 0.6 }}
          className={classes.cartButton}
        >
          Add to Cart
        </Button>
      </div> :
      <Button
          variant="contained"
          size="large"
          color="inherit"
          sx={{ mx: 1, my: 2, minWidth: 0.6 }}
          className={classes.cartButton}
          disabled
      >
        Add to Cart
      </Button>
    );
  };

  return (
    <div className="add-to-cart-form" data-testid="addToCart">
      {open && <p>Please select a size</p>}
      {renderSizeDropdown()}
      {renderQtyDropdown()}
      {renderCartButton()}
    </div>
  )
}