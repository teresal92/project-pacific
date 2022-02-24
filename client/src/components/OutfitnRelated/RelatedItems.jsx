import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardMedia } from '@mui/material';
import { Grid, Container } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import RelatedItemEntry from './RelatedItemEntry.jsx';
const axios = require('axios');



export default function RelatedItems(props) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    async function getRelated() {
      try {
        const res = await axios.get(`/api/products/${props.productId}/related`);
        setRelated(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getRelated();
  }, []);

  const breakPoints = [
    { width: 300, itemsToShow: 4 },
  ];

  return (
    <div className='relatedList'>
      <h3>RELATED ITEMS</h3>
      <Carousel breakPoints={breakPoints}>
        {related.map((item, i) => (
          <RelatedItemEntry
            comparison={props.productId}
            item={item}
            key={`item-key-${i}`} />
        ))}
      </Carousel>
    </div>
  )
};