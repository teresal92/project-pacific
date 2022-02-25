import React, { useState, useEffect } from 'react';
import ProductInfo from '../ProductDetailOverview/ProductInfo.jsx';
import { Card, CardHeader, CardActions, CardMedia, Box, Modal, Button } from '@mui/material';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';

const axios = require('axios');

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function RelatedItemEntry(props) {
  const [productInfo, setProductInfo] = useState([]);
  const [styles, setStyles] = useState([]);
  const [compareInfo, setCompareInfo] = useState([]);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    const getProductInfo = axios.get(`/api/products/${props.item}`);
    const getStyles = axios.get(`/api/products/${props.item}/styles`);
    const getCompareInfo = axios.get(`/api/products/${props.comparison}`);

    Promise.all([getProductInfo, getStyles, getCompareInfo])
      .catch(err => console.error(err))
      .then(res => {
        setProductInfo(res[0].data);
        setStyles(res[1].data.results[0].photos[0]);
        setCompareInfo(res[2].data);
      })
  }, []);

  const columns = [
    { id: 'name', label: compareInfo.name, minWidth: 170 },
    { id: 'compare', label: '', minWidth: 100 },
    { id: 'related', label: productInfo.name, minWidth: 170 }
  ];

  function createData(name, compare, related) {
    return { name, compare, related };
  }

  const rows = [
    createData(compareInfo.campus, 'campus', productInfo.campus),
    createData(compareInfo.category, 'category', productInfo.category),
    createData(compareInfo.created_at, 'created_at', productInfo.created_at),
    createData(compareInfo.default_price, 'default_price', productInfo.default_price),
    createData(compareInfo.description, 'description', productInfo.description),
    createData(compareInfo.slogan, 'slogan', productInfo.slogan),
    createData(compareInfo.updated_at, 'updated_at', productInfo.updated_at),
  ];

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className='relativeItem'>
        <CardHeader titleTypographyProps={{ variant: 'h7' }} title={productInfo.name} height='50' />
        <CardMedia
          className='relativeImage'
          component='img'
          height='200'
          alt='NO IMAGE'
          src={styles.url} />
        <CardActions >
          <Button size="small" onClick={handleOpen}>COMPARE</Button>
        </CardActions>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 600 }}>
            <h2 id="parent-modal-title">COMPARISON</h2>
            <div id="parent-modal-description">
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.compare}>
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </div>
          </Box>
        </Modal>
      </Card>
    </div>
  )
};