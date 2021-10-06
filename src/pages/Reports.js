import React, { useState, useEffect } from 'react';
import { FormSelect } from '../components/Forms';

import RenderedForm from '../components/Forms/RenderedForm';
import Grid from '@mui/material/Grid';

import formData from '../formData';

const Reports = () => {
  const [brand, setBrand] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    brand !== '' && setData(formData[brand]);
  }, [brand, setBrand]);

  const brandSelect = (data) => {
    const value = Object.values(data);
    setBrand(value[0]);
  };

  return (
    <section style={{ margin: '50px' }}>
      <Grid xs={8}>
        <FormSelect
          callback={brandSelect}
          data={formData.brands}
          label='brands'
          value={brand}
        />
      </Grid>
      {data.length ? <RenderedForm data={data} /> : null}
    </section>
  );
};

export default Reports;
