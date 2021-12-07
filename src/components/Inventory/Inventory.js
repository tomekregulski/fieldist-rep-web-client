import React, { useState, useContext, useEffect } from 'react';
import { ReportContext } from '../../context/ReportContext';

import { FormCheckbox } from '../Forms';
import { InventoryTable } from '.';

import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
import ButtonMain from '../ButtonMain/ButtonMain';

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
    !selectedProducts.length && setShowTable(false);
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
        <ButtonMain variant='outlined' fullWidth onClick={() => handleButton()}>
          {showTable === true ? 'Edit Selected Products' : 'Select Products'}
        </ButtonMain>
        {showProductSelect === true && (
          <div>
            <FormCheckbox
              question={'Please select products to report'}
              data={brandProducts}
              callback={handleProductSelect}
              value={selectedProducts}
            />
            <ButtonMain
              variant='outlined'
              fullWidth
              onClick={() => handleSubmit()}
            >
              Submit
            </ButtonMain>
          </div>
        )}
      </form>

      {showTable === true ? <InventoryTable data={selectedProducts} /> : null}
    </div>
  );
};

export default Inventory;
