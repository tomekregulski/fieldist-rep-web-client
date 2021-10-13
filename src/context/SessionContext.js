import React, { useState, createContext } from 'react';
// import axios from 'axios';
export const SessionContext = createContext();

export const SessionProvider = (props) => {
  const [start, setStart] = useState(false);
  const [date, setDate] = useState('');
  const [venues, setVenues] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [checkedIn, setCheckedIn] = useState({});
  const [brands, setBrands] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [checkedOut, setCheckedOut] = useState({});

  const [formsSubmitted, setFormsSubmitted] = useState([]);
  // const [totalTime, setTotalTime] = useState('');

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
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};
