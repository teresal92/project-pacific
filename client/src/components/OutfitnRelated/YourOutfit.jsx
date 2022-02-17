import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardMedia } from '@mui/material';
import { Grid, Container } from '@mui/material';



export default function OutfitList(props) {

  return (
    props.selected ? (
      <Container >
        <div className='outfitBox'>
          <h3>YOUR OUTFIT</h3>
          <Grid container>
            {props.outfit.map((item, i) => (
              <Grid item key={`item-key-${i}`}>
                <Card className='outfitItem'>
                  <CardHeader titleTypographyProps={{variant:'h7' }} title={item.name} />
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid>
            <Card className='outfitAdd' onClick={(e) => { console.log('clicking works') }}>
              <CardHeader title={'ADD TO OUTFIT'} />
            </Card>
          </Grid>
        </div>
      </Container>
    ) : (
      <Container >
        <div className='outfitBox'>
          <h3>YOUR OUTFIT</h3>
          <Grid container>
            {props.outfit.map((item, i) => (
              <Grid item key={`item-key-${i}`}>
                <Card className='outfitItem'>
                  <CardHeader titleTypographyProps={{variant:'h7' }} title={item.name} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    )
  )
};