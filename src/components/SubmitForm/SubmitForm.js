import React, { useState, useContext } from 'react';

import axios from 'axios';

import { AuthContext } from '../../context/AuthContext';
import { SessionContext } from '../../context/SessionContext';
import { ReportContext } from '../../context/ReportContext';

import ButtonMain from '../ButtonMain/ButtonMain';

import Grid from '@mui/material/Grid';

const SubmitForm = () => {
  const { user } = useContext(AuthContext);

  const { date, clockIn, location, clockOut, totalForms, reset } =
    useContext(SessionContext);

  const { brand, data, finished, resetRpt, validated } =
    useContext(ReportContext);

  // eslint-disable-next-line no-unused-vars
  const [checkedIn, setCheckedIn] = clockIn;
  const [showFinished, setShowFinished] = finished;
  // eslint-disable-next-line no-unused-vars
  const [selectedBrand, setSelectedBrand] = brand;
  // eslint-disable-next-line no-unused-vars
  const [selectedLocation, setSelectedLocation] = location;
  // eslint-disable-next-line no-unused-vars
  const [reportData, setReportData] = data;
  // eslint-disable-next-line no-unused-vars
  const [checkedOut, setCheckedOut] = clockOut;
  const [formsSubmitted, setFormsSubmitted] = totalForms;
  const [showClockOut, setShowClockOut] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [reportValidated, setReportValidated] = validated;

  const resetReport = resetRpt;
  const resetSession = reset;

  const handleSubmitReport = () => {
    setFormsSubmitted((prevState) => [...prevState, selectedBrand]);

    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const submitTime = `${hours}:${minutes}`;
    reportData.photos = [1234567, 1234567, 12345678];

    const payload = {
      date: date,
      time: submitTime,
      location: selectedLocation.name,
      brand: selectedBrand,
      form: 'WFM Audits',
      rep: `${user[0].first_name} ${user[0].last_name}`,
      rep_id: user[0].id,
      response: reportData.formResponse,
      inventory: reportData.inventory,
      photos: JSON.stringify(reportData.photos),
      expenses: reportData.expenses || '',
    };
    axios
      .post(
        // 'http://127.0.0.1:5001/api/reports',
        'https://fieldist-back-end.herokuapp.com/api/reports',
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
          console.log('Session Successfully Completed'),
          window.location.reload()
        )
        .then(resetSession(), setReportValidated(false));
    });
  };

  const handleSessionClose = () => {
    resetReport();
    setShowClockOut(true);
  };

  return (
    <div>
      <ButtonMain variant='outlined' onClick={() => handleSubmitReport()}>
        Submit Completed Report
      </ButtonMain>
      {showFinished === true ? (
        <Grid>
          <p style={{ textAlign: 'center' }}>
            Do you have another form to submit at this location?
          </p>
          <ButtonMain
            variant='outlined'
            fullWidth
            onClick={() => resetReport()}
          >
            Yes
          </ButtonMain>
          <ButtonMain
            variant='outlined'
            fullWidth
            onClick={() => handleSessionClose()}
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
    </div>
  );
};

export default SubmitForm;
