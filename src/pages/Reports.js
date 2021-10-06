import React, { useState, useEffect } from 'react';
import { FormSelect } from '../components/Forms';

import RenderedForm from '../components/Forms/RenderedForm';

import formData from '../formData';

const Reports = () => {
  const [brand, setBrand] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    brand !== '' && setData(formData[brand]);
  }, [brand, setBrand]);

  const brandSelect = (data) => {
    setBrand(data);
  };

  return (
    <>
      <FormSelect
        callback={brandSelect}
        data={formData.brands}
        label='brands'
        value={brand}
      />

      {data !== {} && <RenderedForm data={data} />}
    </>
  );
};

export default Reports;
