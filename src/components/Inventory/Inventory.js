import React, { useState } from 'react';
import { FormCheckbox } from '../Forms';
import { InventoryTable } from '.';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Inventory = (props) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showTable, setShowTable] = useState(false);

  // const handleProductSelect = (event) => {
  //   console.log(event.target.value);
  // };

  const handleProductSelect = (data) => {
    const value = Object.values(data)[0];
    const key = Object.keys(data)[0];
    console.log(value);
    if (value === true) {
      setSelectedProducts((selectedProducts) => [...selectedProducts, key]);
    }
    if (value === false) {
      setSelectedProducts(
        selectedProducts.filter((product) => product !== key)
      );
    }
  };

  const handleSubmit = () => {
    selectedProducts.length
      ? setShowTable(true)
      : console.log('You must select at least one product');
  };

  return (
    <div>
      <form action='/my-handling-form-page' method='post'>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <FormCheckbox
              question={'Please select products to report'}
              data={props.data}
              callback={handleProductSelect}
            />
          </Grid>
          <Grid item xs={8}>
            <Button variant='outlined' fullWidth onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      {showTable === true ? <InventoryTable data={selectedProducts} /> : null}
    </div>
  );
};

export default Inventory;
