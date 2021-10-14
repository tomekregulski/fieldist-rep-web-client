import React, { useState, useContext } from 'react';
import { ReportContext } from '../../context/ReportContext';

import { FormCheckbox } from '../Forms';
import { InventoryTable } from '.';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Inventory = (props) => {
  const { products, reportedProducts } = useContext(ReportContext);
  // eslint-disable-next-line no-unused-vars
  const [brandProducts, setBrandProducts] = products;

  const [selectedProducts, setSelectedProducts] = reportedProducts;
  const [showTable, setShowTable] = useState(false);

  const handleProductSelect = (data) => {
    const value = Object.values(data)[0];
    const key = Object.keys(data)[0];
    setSelectedProducts((selectedProducts) => ({
      ...selectedProducts,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    Object.values(selectedProducts).includes(true)
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
              data={brandProducts}
              callback={handleProductSelect}
              value={selectedProducts}
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
