import React, { useState, useEffect, useContext } from 'react';

import { SessionContext } from '../../context/SessionContext';
import { FormSelect } from '../Forms';

import axios from 'axios';
import ButtonMain from '../ButtonMain/ButtonMain';

import AlertModal from '../AlertModal/AlertModal';

const Session = () => {
  const {
    currentDate,
    clockIn,
    locationList,
    location,
    brandsData,
    brandNames,
  } = useContext(SessionContext);

  const [checkedIn, setCheckedIn] = clockIn;
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = currentDate;
  const [venues, setVenues] = locationList;
  // eslint-disable-next-line no-unused-vars
  const [selectedLocation, setSelectedLocation] = location;
  // eslint-disable-next-line no-unused-vars
  const [brands, setBrands] = brandsData;
  // eslint-disable-next-line no-unused-vars
  const [brandList, setBrandList] = brandNames;

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

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
          return setVenues((prevState) => [...prevState, store]);
        })
      );
  };

  const handleAlertResponse = () => {
    setOpen(false);
  };

  const handleAlertOpen = (alertMessage) => {
    setOpen(true);
    setMessage(alertMessage);
  };

  useEffect(() => {
    handleStart();
  }, []);

  function handleStoreSelect(data) {
    setCheckedIn({});
    const value = Object.values(data)[0];

    axios
      .get(
        // 'http://localhost:5001/api/venues/name',
        'https://fieldist-back-end.herokuapp.com/api/venues/name',
        {
          headers: {
            name: value,
          },
        }
      )
      .then((response) => setSelectedLocation(response.data[0]));
  }

  const handleCheckIn = () => {
    setBrandList([]);
    if (!Object.keys(selectedLocation).length) {
      // alert('You must select store');
      handleAlertOpen('You must select store');
      return;
    }
    if (!Object.keys(checkedIn).length) {
      const locationCoords = selectedLocation.coords.split(', ');
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const timestamp = position.timestamp;
        const storeLat = locationCoords[0];
        const storeLon = locationCoords[1];
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
          : handleAlertOpen(
              'Please try again when you are closer to the venue'
            );
      });

      axios
        .get(
          // 'http://localhost:5001/api/brands'
          'https://fieldist-back-end.herokuapp.com/api/brands'
        )
        .then((response) => setBrands(response.data));
    }
  };

  return (
    <div>
      <div style={{ margin: '30px auto', width: '280px' }}>
        <FormSelect
          callback={handleStoreSelect}
          data={venues}
          label='stores'
          question={'Select a Location'}
          value={selectedLocation.name}
        />
      </div>
      <ButtonMain variant='outlined' fullWidth onClick={() => handleCheckIn()}>
        {Object.keys(checkedIn).length ? 'Checked In' : 'Check In'}
      </ButtonMain>
      {open === true && (
        <AlertModal
          open={open}
          message={message}
          callback={handleAlertResponse}
        />
      )}
    </div>
  );
};

export default Session;
