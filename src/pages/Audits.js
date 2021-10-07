import React, { useState, useEffect } from 'react';
import { FormSelect } from '../components/Forms';
import { Inventory } from '../components/Inventory';

import RenderedForm from '../components/Forms/RenderedForm';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import formData from '../formData';

const stores = [
  'Whole Foods Market - Upper West Side',
  'Whole Foods Market - Columbus Circle',
  'Whole Foods Market - Tribeca',
  'Whole Foods Market - Bryant Park',
];

const Reports = () => {
  const [start, setStart] = useState(false);
  const [store, setStore] = useState('');
  const [checkedIn, setCheckedIn] = useState(false);
  const [brand, setBrand] = useState('');
  const [products, setProducts] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    brand !== '' && setQuestions(formData[brand]);
  }, [brand, setBrand]);

  const brandSelect = (data) => {
    const value = Object.values(data);
    setBrand(value[0]);
    for (let i = 0; i < formData.products.length; i++) {
      if (formData.products[i].name === value[0]) {
        setProducts(formData.products[i].products);
      }
    }
  };

  const handleStart = () => {
    setStart(true);
  };

  const handleStoreSelect = (store) => {
    setStore(store);
  };

  const handleCheckIn = () => {
    setCheckedIn(true);
  };

  return (
    <Grid style={{ margin: '50px' }}>
      <Grid item xs={8}>
        <Button variant='outlined' fullWidth onClick={() => handleStart()}>
          Start New Store Visit
        </Button>
      </Grid>
      {start === true ? (
        <Grid item xs={8}>
          <FormSelect
            callback={handleStoreSelect}
            data={stores}
            label='stores'
            value={store}
          />
        </Grid>
      ) : null}
      {store !== '' ? (
        <Grid style={{ marginTop: '15px' }} item xs={8}>
          <Button variant='outlined' fullWidth onClick={() => handleCheckIn()}>
            Check In
          </Button>
        </Grid>
      ) : null}
      {checkedIn === true ? (
        <Grid item xs={8}>
          <FormSelect
            callback={brandSelect}
            data={formData.brands}
            label='brands'
            value={brand}
          />
        </Grid>
      ) : null}
      {questions.length ? (
        <Grid style={{ marginTop: '40px' }}>
          <h2>--- {brand} Report Form ---</h2>
          <Inventory data={products} />
          <RenderedForm data={questions} brand={brand} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Reports;
