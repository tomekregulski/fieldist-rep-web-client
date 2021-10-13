import React, { useState, useEffect, useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import { ReportContext } from '../context/ReportContext';

import { FormSelect } from '../components/Forms';
import SectionCard from '../components/SectionCard/SectionCard';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import axios from 'axios';

const sections = ['Inventory', 'Form Response', 'Photos', 'Expenses'];

const Reports = () => {
  const {
    // begin,
    currentDate,
    clockIn,
    locationList,
    location,
    brandsData,
    brandNames,
    clockOut,
    totalForms,
  } = useContext(SessionContext);

  const { brand, products, questions, expenses, data, finished } =
    useContext(ReportContext);

  // const [start, setStart] = begin;
  const [checkedIn, setCheckedIn] = clockIn;
  const [date, setDate] = currentDate;
  const [venues, setVenues] = locationList;
  const [selectedLocation, setSelectedLocation] = location;
  const [brands, setBrands] = brandsData;
  const [brandList, setBrandList] = brandNames;
  const [selectedBrand, setSelectedBrand] = brand;
  // eslint-disable-next-line no-unused-vars
  const [brandProducts, setBrandProducts] = products;
  const [reportQuestions, setReportQuestions] = questions;
  const [reportExpenses, setReportExpenses] = expenses;
  const [showFinished, setShowFinished] = finished;
  // eslint-disable-next-line no-unused-vars
  const [reportData, setReportData] = data;
  // eslint-disable-next-line no-unused-vars
  const [formsSubmitted, setFormsSubmitted] = totalForms;
  const [checkedOut, setCheckedOut] = clockOut;

  const [showClockOut, setShowClockOut] = useState(false);

  useEffect(() => {
    brands.length &&
      brands.map((brand) => {
        setBrandList((prevState) => [...prevState, brand.name]);
      });
  }, [brands, setBrands]);

  const handleStart = () => {
    setVenues([]);
    function formatDate(date, format) {
      const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear(),
      };

      return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
    }

    const today = new Date();
    setDate(formatDate(today, 'mm/dd/yy'));

    axios
      .get(
        // 'http://localhost:5001/api/venues'
        'https://fieldist-back-end.herokuapp.com/api/venues'
      )
      .then((response) =>
        response.data.map((venue) => {
          const store = `${venue.name} + ${venue.address}`;
          setVenues((prevState) => [...prevState, store]);
        })
      );
  };

  const handleStoreSelect = (data) => {
    const value = Object.values(data)[0];
    setSelectedLocation(value);
  };

  const handleCheckIn = () => {
    setBrandList([]);
    // setCheckedIn({ lat: 123, lon: 456, timestamp: 789 });
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const timestamp = position.timestamp;
      setCheckedIn({ lat, lon, timestamp });
    });
    axios
      .get(
        // 'http://localhost:5001/api/brands'
        'https://fieldist-back-end.herokuapp.com/api/brands'
      )
      .then((response) => setBrands(response.data));
  };

  const brandSelect = (data) => {
    setBrandProducts([]);
    const value = Object.values(data);
    const payload = brands.filter((brand) => value[0] === brand.name);
    console.log(payload[0]);
    setSelectedBrand(payload[0].name);
    setReportQuestions(JSON.parse(payload[0].report_questions[0].questions));

    for (let i = 0; i < payload[0].products.length; i++) {
      setBrandProducts((prevState) => [
        ...prevState,
        payload[0].products[i].name,
      ]);
    }
  };

  const handleSubmitReport = () => {
    setFormsSubmitted((prevState) => [...prevState, selectedBrand]);
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const submitTime = `${hours}:${minutes}`;

    console.log(submitTime);
    const general = {
      date: date,
      time: submitTime,
      brand: selectedBrand,
      campaign: 'WFM Audits',
      location: selectedLocation,
    };
    data[0].general = general;
    data[0].photos = [1234567, 1234567, 12345678];
    const payload = {
      general: JSON.stringify(data[0].general),
      response: JSON.stringify(data[0].formResponse),
      inventory: JSON.stringify(data[0].inventory),
      photos: JSON.stringify(data[0].photos),
      expenses: JSON.stringify(data[0].expenses),
    };

    axios
      .post(
        // 'http://127.0.0.1:5001/api/reports', {
        'https://fieldist-back-end.herokuapp.com/api/reports',
        {
          payload,
        }
      )
      .then(setShowFinished(true));
  };

  const handleCheckOut = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const timestamp = position.timestamp;
      setCheckedOut({ lat, lon, timestamp });
      const totalSessionTime = (timestamp - checkedIn.timestamp) / 1000 / 60;
      console.log({
        date: date,
        location: selectedLocation,
        check_in: checkedIn,
        totalForms: formsSubmitted,
        check_out: { lat, lon, timestamp },
        totalTime: totalSessionTime,
      });
      // window.location.reload();
    });
  };

  const resetForm = () => {
    setSelectedBrand('');
    setBrandProducts([]);
    setReportQuestions([]);
    // setReportPhotos([]);
    setReportExpenses([]);
    setReportData({});
    // setShowFinished(false);
  };

  return (
    <Grid style={{ margin: '50px' }}>
      <Grid style={{ display: 'block', margin: '0 auto' }} item xs={8}>
        <Button variant='outlined' fullWidth onClick={() => handleStart()}>
          Start New Store Visit
        </Button>
      </Grid>
      {venues.length ? (
        <Grid style={{ margin: '0 auto' }} item xs={8}>
          <FormSelect
            callback={handleStoreSelect}
            data={venues}
            label='stores'
            question={'Select a Location'}
            value={selectedLocation}
          />
        </Grid>
      ) : null}
      {selectedLocation !== '' ? (
        <Grid style={{ margin: '15px auto 0' }} item xs={8}>
          <Button variant='outlined' fullWidth onClick={() => handleCheckIn()}>
            Check In
          </Button>
        </Grid>
      ) : null}
      {checkedIn.lat && brandList.length ? (
        <Grid style={{ margin: '0 auto' }} item xs={8}>
          <FormSelect
            callback={brandSelect}
            data={brandList}
            label='brands'
            value={brand}
          />
        </Grid>
      ) : null}
      {reportQuestions.length
        ? sections.map((section, index) => (
            <SectionCard title={section} key={index} />
          ))
        : null}
      {data[0].formResponse ? (
        <Grid style={{ margin: '15px auto 0' }} item xs={8}>
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
          <p style={{ textAlign: 'center' }}>
            Do you have another form to submit at this location?
          </p>
          <Grid style={{ margin: '15px auto 0' }} item xs={8}>
            <Button variant='outlined' fullWidth onClick={() => resetForm()}>
              Yes
            </Button>
          </Grid>
          <Grid style={{ margin: '15px auto 0' }} item xs={8}>
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
        <Grid style={{ margin: '15px auto 0' }} item xs={8}>
          <Button variant='outlined' fullWidth onClick={() => handleCheckOut()}>
            Check Out
          </Button>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Reports;
