import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography } from '@mui/material';
import { Grid, Container, Button, CardActions } from '@mui/material';
import Carousel from 'react-elastic-carousel';



export default function OutfitList(props) {

  const breakPoints = [
    { width: 150, itemsToShow: 4 },
  ];

  return (
    props.selected ? (
      <div className='outfitBox'>
        <h3>YOUR OUTFIT</h3>
        <Carousel className='dragon' breakPoints={breakPoints}>
          {props.outfit.map((item, i) => (
            <div key={i}>
              <Card className='outfitItem'>
                <CardHeader titleTypographyProps={{ variant: 'h7' }} title={item.name} height='50' />
                <CardMedia
                  className='outfitImage'
                  component='img'
                  height='200'
                  alt={item.photos[0].url}
                  src={item.photos[0].thumbnail_url} />
                <CardActions >
                  <Button size="small" onClick={() => {props.remove(item)}}>X</Button>
                </CardActions>
              </Card>
            </div>
          ))}
          <Card className='outfitAdd' onClick={(e) => { props.add(props.item) }}>
            <CardHeader titleTypographyProps={{ variant: 'h6' }} title={'ADD TO OUTFIT'} />
            <CardContent>
              <Typography className='plusIcon'>
                +
              </Typography>
            </CardContent>
          </Card>
        </Carousel>
      </div>
    ) : (
      <div className='outfitBox'>
        <h3>YOUR OUTFIT</h3>
        <Carousel className='dragon' breakPoints={breakPoints}>
          {props.outfit.map((item, i) => (
            <div key={i}>
              <Card className='outfitItem'>
                <CardHeader titleTypographyProps={{ variant: 'h7' }} title={item.name} height='50' />
                <CardMedia
                  className='outfitImage'
                  component='img'
                  height='200'
                  alt={item.photos[0].url}
                  src={item.photos[0].thumbnail_url} />
                <CardActions >
                  <Button size="small" onClick={console.log(item.id)}>X</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    )
  )
};