import React, { useState, useEffect, useContext } from 'react';
import { ReportContext } from '../context/ReportContext';

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
  const {
    begin,
    clockIn,
    location,
    brand,
    products,
    questions,
    data,
    finished,
    clockOut,
  } = useContext(ReportContext);
  const [start, setStart] = begin;
  const [selectedLocation, setSelectedLocation] = location;
  const [checkedIn, setCheckedIn] = clockIn;
  const [selectedBrand, setSelectedBrand] = brand;
  const [brandProducts, setBrandProducts] = products;
  const [reportQuestions, setReportQuestions] = questions;
  const [showFinished, setShowFinished] = finished;
  // eslint-disable-next-line no-unused-vars
  const [reportData, setReportData] = data;
  // eslint-disable-next-line no-unused-vars
  const [checkedOut, setCheckedOut] = clockOut;

  const [showClockOut, setShowClockOut] = useState(false);

  useEffect(() => {
    selectedBrand !== '' && setReportQuestions(formData[selectedBrand]);
  }, [brand, selectedBrand, setReportQuestions, setSelectedBrand]);

  const brandSelect = (data) => {
    const value = Object.values(data);
    setSelectedBrand(value[0]);
    for (let i = 0; i < formData.products.length; i++) {
      if (formData.products[i].name === value[0]) {
        setBrandProducts(formData.products[i].products);
      }
    }
  };

  const handleStart = () => {
    setStart(true);
  };

  const handleStoreSelect = (data) => {
    const value = Object.values(data)[0];
    setSelectedLocation(value);
  };

  const handleCheckIn = () => {
    setCheckedIn(true);
  };

  const handleSubmitReport = () => {
    console.log(data[0]);
    setShowFinished(true);
  };

  const handleCheckOut = () => {
    setCheckedOut(true);
    window.location.reload();
  };

  const resetForm = () => {
    setSelectedBrand('');
    setBrandProducts([]);
    setReportQuestions([]);
    setReportData({});
    setShowFinished(false);
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
            question={'Select a Location'}
            value={selectedLocation}
          />
        </Grid>
      ) : null}
      {selectedLocation !== '' ? (
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
      {reportQuestions.length ? (
        <Grid style={{ marginTop: '40px' }}>
          <h2>--- {selectedBrand} Report Form ---</h2>
          <Inventory data={brandProducts} />
          <RenderedForm data={reportQuestions} brand={brand} />
        </Grid>
      ) : null}
      {data[0].formResponse ? (
        <Grid style={{ marginTop: '15px' }} item xs={8}>
          <Button
            variant='outlined'
            fullWidth
            onClick={() => handleSubmitReport()}
          >
            Submit Completed Report
          </Button>
        </Grid>
      ) : null}
      {showFinished === true ? (
        <Grid>
          <p>Do you have another form to submit at this location?</p>
          <Grid style={{ marginTop: '15px' }} item xs={8}>
            <Button variant='outlined' fullWidth onClick={() => resetForm()}>
              Yes
            </Button>
          </Grid>
          <Grid style={{ marginTop: '15px' }} item xs={8}>
            <Button
              variant='outlined'
              fullWidth
              onClick={() => setShowClockOut(true)}
            >
              No
            </Button>
          </Grid>
        </Grid>
      ) : null}
      {showClockOut === true ? (
        <Grid style={{ marginTop: '15px' }} item xs={8}>
          <Button variant='outlined' fullWidth onClick={() => handleCheckOut()}>
            Check Out
          </Button>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Reports;
