import React from 'react';
// import { ReportContext } from '../../context/ReportContext';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Textfield, FormSelect } from '../Forms';

const expenseTypes = [
  'Travel - Distance',
  'Travel - Other',
  'Purchase - Supplies',
  'Other',
];

const ExpenseTable = (props) => {
  const handleInput = (data) => {
    props.callback(data);
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Please enter a new expense</h2>
      <Grid>
        <Grid item xs={8}>
          <TableContainer style={{ width: '450px' }} component={Paper}>
            <Table
              // sx={{ maxWidth: 850 }}
              size='small'
              aria-label='a dense table'
            >
              <TableHead>
                <TableRow>
                  <TableCell>Expense Type</TableCell>
                  <TableCell align='right'>$ Amount</TableCell>
                  <TableCell align='right'>Optional - Notes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <FormSelect
                      data={expenseTypes}
                      question={'expenseType'}
                      callback={handleInput}
                      target={'expenseType'}
                    />
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Textfield callback={handleInput} target='expenseAmount' />
                  </TableCell>
                  <TableCell align='right'>
                    <Textfield callback={handleInput} target='expenseNotes' />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid style={{ marginTop: '20px' }} item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default ExpenseTable;