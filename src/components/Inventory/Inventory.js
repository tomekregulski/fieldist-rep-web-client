import React, { useState, useContext, useEffect } from 'react';
import { ReportContext } from '../../context/ReportContext';

import { FormCheckbox } from '../Forms';
import { InventoryTable } from '.';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Inventory = () => {
  const { products, reportedProducts, inventory } = useContext(ReportContext);
  // eslint-disable-next-line no-unused-vars
  const [brandProducts, setBrandProducts] = products;
  const [inventoryData, setInventoryData] = inventory;
  // eslint-disable-next-line no-unused-vars
  const [showButton, setShowButton] = useState(true);
  const [showProductSelect, setShowProductSelect] = useState(false);
  const [selectedProducts, setSelectedProducts] = reportedProducts;
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    let unselectedProducts = [];
    for (const product in selectedProducts) {
      if (selectedProducts[product] === false) {
        unselectedProducts.push(product);
      }
    }

    const tempObj = inventoryData;

    unselectedProducts.forEach((product) => {
      tempObj[product] && delete tempObj[product];
    });
    setInventoryData(tempObj);
  }, [inventoryData, selectedProducts, setInventoryData]);

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

    setShowProductSelect(false);
    setShowButton(true);
    if (
      Object.values(selectedProducts).length &&
      Object.values(selectedProducts).includes(true)
    ) {
      setShowTable(true);
    }
  };

  const handleButton = () => {
    setShowButton(false);
    setShowProductSelect(true);
  };

  return (
    <div>
      <form
        style={{ minWidth: '300px', maxWidth: '800px' }}
        action='/my-handling-form-page'
        method='post'
      >
        <Button variant='outlined' fullWidth onClick={() => handleButton()}>
          Select Products
        </Button>
        {showProductSelect === true && (
          <Grid container spacing={2}>
            <Grid style={{ minWidth: '300px' }} item xs={8}>
              <FormCheckbox
                question={'Please select products to report'}
                data={brandProducts}
                callback={handleProductSelect}
                value={selectedProducts}
              />
            </Grid>
            <Grid item xs={8}>
              <Button
                variant='outlined'
                fullWidth
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        )}
      </form>

      {showTable === true ? <InventoryTable data={selectedProducts} /> : null}
    </div>
  );
};

export default Inventory;
