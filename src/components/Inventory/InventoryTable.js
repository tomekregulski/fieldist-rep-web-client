import React, { useState, useEffect, useContext } from 'react';
import { ReportContext } from '../../context/ReportContext';

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
  const { data } = useContext(ReportContext);
  const [products, setProducts] = useState([]);
  const [salesData, setSalesData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [reportData, setReportData] = data;
  console.log(props.data);

  useEffect(() => {
    let itemsArr = [];
    for (const item in props.data) {
      if (props.data[item] === true) {
        itemsArr.push(item);
      }
    }
    setProducts(itemsArr);
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
    console.log({ inventory: salesData });
    setReportData((prevState) => ({
      ...prevState,
      inventory: salesData,
    }));
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
                  {/* map function to render columns based on brand's (eventually campaign) preferences */}
                  <TableCell align='right'>Inventory</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => {
                  if (
                    reportData.inventory &&
                    reportData.inventory.hasOwnProperty(product)
                  ) {
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          {product}
                        </TableCell>
                        <TableCell align='right'>
                          <Textfield
                            callback={handleInput}
                            target={product}
                            value={reportData.inventory[product]}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  } else {
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          {product}
                        </TableCell>
                        <TableCell align='right'>
                          <Textfield callback={handleInput} target={product} />
                        </TableCell>
                      </TableRow>
                    );
                  }
                })}
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
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default InventoryTable;
