import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';

export default function Ratings({ratings}) {
  const [ avgRating, setAvgRating ] = useState(0);

  useEffect(() => {
    if (!Object.keys(ratings).length) {
      setAvgRating(0);
    }

    function getSumRatings() {
      let sum = 0;
      for (let rating in ratings) {
        rating = Number.parseFloat(rating);
        if (rating >= 1 || rating <= 5) {
          sum += rating * Number.parseFloat(ratings[rating]);
        }
      }
      return sum;
    };
    const sumRatings = Number.parseFloat(getSumRatings());

    function getTotalRatings() {
      let total = 0;
      for (let rating in ratings) {
        rating = Number.parseFloat(rating);
        if (rating >= 1 || rating <= 5) {
          total += Number.parseFloat(ratings[rating]);
        }
      }
      console.log(typeof total);
      return total;
    };
    let totalRatings = Number.parseFloat(getTotalRatings());



    // console.log(typeof totalRatings);
    setAvgRating((sumRatings)/(totalRatings).toFixed(2));
  }, [ratings]);


  return (
    <Rating name="read-only" value={avgRating} precision={0.25} readOnly />
  );
}
