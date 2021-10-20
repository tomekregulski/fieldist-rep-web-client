import React, { useState, useEffect, useContext } from 'react';
import { ReportContext } from '../../context/ReportContext';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Textfield } from '../Forms';

const InventoryTable = (props) => {
  const { data, inventory } = useContext(ReportContext);
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [reportData, setReportData] = data;
  const [inventoryData, setInventoryData] = inventory;

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

    setInventoryData((prevState) => ({
      ...prevState,
      [key]: value,
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
                  if (inventoryData && inventoryData.hasOwnProperty(product)) {
                    console.log(product + 'exists');
                    console.log(inventoryData[product]);
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
                            value={inventoryData[product]}
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
        <Grid style={{ marginTop: '20px' }} item xs={12}></Grid>
      </Grid>
    </div>
  );
};

export default InventoryTable;
