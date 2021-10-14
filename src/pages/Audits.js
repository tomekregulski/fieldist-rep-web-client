import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { SessionContext } from '../context/SessionContext';
import { ReportContext } from '../context/ReportContext';

import { FormSelect } from '../components/Forms';
import SectionCard from '../components/SectionCard/SectionCard';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import axios from 'axios';

const sections = ['Inventory', 'Form Response', 'Photos', 'Expenses'];

const ButtonMain = styled(Button)({
  boxShadow: 'none',
  display: 'block',
  margin: '20px auto 20px',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#0063cc',
  width: '280px',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const Reports = () => {
  const { user } = useContext(AuthContext);
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

  const [userData, setUserData] = user;

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
          const store = `${venue.name}`;
          setVenues((prevState) => [...prevState, store]);
        })
      );
  };

  const handleStoreSelect = (data) => {
    const value = Object.values(data)[0];
    axios
      .get(
        // 'http://localhost:5001/api/venues/name', {
        'https://fieldist-back-end.herokuapp.com/api/venues/name',
        {
          headers: {
            name: value,
          },
        }
      )
      .then((response) => setSelectedLocation(response.data[0]));
  };

  const handleCheckIn = () => {
    setBrandList([]);
    // setCheckedIn({ lat: 123, lon: 456, timestamp: 789 });
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const timestamp = position.timestamp;
      const storeLat = selectedLocation.geometry.lat;
      const storeLon = selectedLocation.geometry.lng;
      function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1); // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
      }

      function deg2rad(deg) {
        return deg * (Math.PI / 180);
      }
      const distance =
        getDistanceFromLatLonInKm(lat, lon, storeLat, storeLon) / 1.609;
      distance < 8
        ? setCheckedIn({ lat, lon, timestamp })
        : console.log('Please try again when you are closer to the venue');
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

    // const general = {
    //   rep: `${user[0].first_name} ${user[0].last_name}`,
    //   rep_id: user[0].id,
    //   time: submitTime,
    //   brand: selectedBrand,
    //   campaign: 'WFM Audits',
    //   location: selectedLocation.name,
    // };
    // data[0].general = general;
    data[0].photos = [1234567, 1234567, 12345678];
    const payload = {
      date: date,
      time: submitTime,
      location: selectedLocation.name,
      brand: selectedBrand,
      form: 'WFM Audits',
      rep: `${user[0].first_name} ${user[0].last_name}`,
      rep_id: user[0].id,
      // general: JSON.stringify(data[0].general),
      response: data[0].formResponse,
      inventory: data[0].inventory,
      photos: JSON.stringify(data[0].photos),
      expenses: data[0].expenses,
    };
    axios
      .post(
        'http://127.0.0.1:5001/api/reports',
        // 'https://fieldist-back-end.herokuapp.com/api/reports',
        {
          payload,
        }
      )
      .then(
        setShowFinished(true),
        console.log('Report Successfully Submitted')
      );
  };

  const handleCheckOut = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const timestamp = position.timestamp;
      setCheckedOut({ lat, lon, timestamp });
      const totalSessionTime = (timestamp - checkedIn.timestamp) / 1000 / 60;
      const sessionData = {
        rep: `${user[0].first_name} ${user[0].last_name}`,
        rep_id: user[0].id,
        date: date,
        location: selectedLocation.name,
        check_in: checkedIn,
        totalForms: formsSubmitted,
        check_out: { lat, lon, timestamp },
        totalTime: totalSessionTime,
      };
      const payload = {
        session_info: JSON.stringify(sessionData),
        user_id: user[0].id,
      };
      axios
        .post(
          // 'http://127.0.0.1:5001/api/session',
          'https://fieldist-back-end.herokuapp.com/api/session',
          {
            payload,
          }
        )
        .then(
          console.log('Session Successfully Completed')
          // window.location.reload()
        );
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
    <Grid style={{ marginTop: '30px' }}>
      <ButtonMain variant='outlined' onClick={() => handleStart()}>
        Start New Store Visit
      </ButtonMain>
      {venues.length ? (
        <div style={{ margin: '30px auto', width: '280px' }}>
          <FormSelect
            callback={handleStoreSelect}
            data={venues}
            label='stores'
            question={'Select a Location'}
            value={selectedLocation.name}
          />
        </div>
      ) : null}
      {selectedLocation !== '' ? (
        <ButtonMain
          variant='outlined'
          fullWidth
          onClick={() => handleCheckIn()}
        >
          Check In
        </ButtonMain>
      ) : null}
      {checkedIn.lat && brandList.length ? (
        <div style={{ margin: '30px auto', width: '280px' }}>
          <FormSelect
            callback={brandSelect}
            data={brandList}
            label='brands'
            value={brand}
          />
        </div>
      ) : null}
      {reportQuestions.length
        ? sections.map((section, index) => (
            <SectionCard title={section} key={index} />
          ))
        : null}
      {data[0].formResponse ? (
        <ButtonMain variant='outlined' onClick={() => handleSubmitReport()}>
          Submit Completed Report
        </ButtonMain>
      ) : null}
      {showFinished === true ? (
        <Grid>
          <p style={{ textAlign: 'center' }}>
            Do you have another form to submit at this location?
          </p>
          <ButtonMain variant='outlined' fullWidth onClick={() => resetForm()}>
            Yes
          </ButtonMain>
          <ButtonMain
            variant='outlined'
            fullWidth
            onClick={() => setShowClockOut(true)}
          >
            No
          </ButtonMain>
        </Grid>
      ) : null}
      {showClockOut === true ? (
        <ButtonMain
          variant='outlined'
          fullWidth
          onClick={() => handleCheckOut()}
        >
          Check Out
        </ButtonMain>
      ) : null}
    </Grid>
  );
};

export default Reports;
