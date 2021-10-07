import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { Textfield } from '../Forms';

const InventoryTable = (props) => {
  const [products, setProducts] = useState([]);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    setProducts(props.data);
  }, [props.data]);

  const handleInput = (data) => {
    const value = Object.values(data)[0];
    const key = Object.keys(data)[0];

    setSalesData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(salesData);
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Inventory Data</h2>
      <Grid>
        <Grid item xs={8}>
          <TableContainer style={{ width: '250px' }} component={Paper}>
            <Table
              sx={{ maxWidth: 250 }}
              size='small'
              aria-label='a dense table'
            >
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align='right'>Inventory</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {product}
                    </TableCell>
                    <TableCell align='right'>
                      <Textfield callback={handleInput} target={product} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid style={{ marginTop: '20px' }} item xs={3}>
          <Button
            variant='outlined'
            fullWidth
            onClick={(event) => handleSubmit(event)}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default InventoryTable;
