import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function Ratings() {
  return (
    <Rating name="half-rating-read" defaultValue={3.25} precision={0.25} readOnly />
  );
}
