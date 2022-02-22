import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardMedia } from '@mui/material';
import { Grid, Container } from '@mui/material';



export default function RelatedItems(props) {

  return (
    <Container >
      <div className='relatedBox'>
        <h3>Related Items</h3>
        <Grid container>
          {props.related.map((item, i) => (
            <Grid item key={`item-key-${i}`}>
              <Card className='relativeItem'>
                <CardHeader titleTypographyProps={{ variant: 'h7' }} title={item.name} height='50' />
                <CardMedia
                  component='img'
                  height='200'
                  alt={'no image'} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
};