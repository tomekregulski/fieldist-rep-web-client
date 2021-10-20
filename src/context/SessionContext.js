import React, { useState, useEffect, createContext } from 'react';

export const SessionContext = createContext();

export const SessionProvider = (props) => {
  const [start, setStart] = useState(false);
  const [date, setDate] = useState('');
  const [venues, setVenues] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [checkedIn, setCheckedIn] = useState({});
  const [brands, setBrands] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [checkedOut, setCheckedOut] = useState({});
  const [formsSubmitted, setFormsSubmitted] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('session')) {
      const data = JSON.parse(localStorage.getItem('session'));

      data.date && setDate(data.date);
      data.location && setSelectedLocation(data.location);
      data.check_in && setCheckedIn(data.check_in);
      data.forms && setFormsSubmitted(data.forms);
      data.check_out && setCheckedOut(data.check_out);
    }
  }, []);

  useEffect(() => {
    const session = {
      date: date || '',
      location: selectedLocation || '',
      check_in: checkedIn || '',
      forms: formsSubmitted || '',
      check_out: checkedOut || '',
    };
    localStorage.setItem('session', JSON.stringify(session));
  }, [checkedIn, checkedOut, date, formsSubmitted, selectedLocation, start]);

  const resetSession = () => {
    setStart(false);
    setDate('');
    setVenues([]);
    setSelectedLocation({});
    setCheckedIn({});
    setBrands([]);
    setBrandList([]);
    setCheckedOut({});
    setFormsSubmitted([]);
  };

  return (
    <SessionContext.Provider
      value={{
        begin: [start, setStart],
        currentDate: [date, setDate],
        locationList: [venues, setVenues],
        location: [selectedLocation, setSelectedLocation],
        clockIn: [checkedIn, setCheckedIn],
        brandsData: [brands, setBrands],
        brandNames: [brandList, setBrandList],
        clockOut: [checkedOut, setCheckedOut],
        totalForms: [formsSubmitted, setFormsSubmitted],
        reset: resetSession,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};
