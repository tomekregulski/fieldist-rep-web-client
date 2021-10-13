import React, { useState, createContext } from 'react';
// import axios from 'axios';
export const ReportContext = createContext();

export const ReportProvider = (props) => {
  const [start, setStart] = useState(false);
  const [venues, setVenues] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [checkedIn, setCheckedIn] = useState({});
  const [brands, setBrands] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brandProducts, setBrandProducts] = useState([]);
  const [reportQuestions, setReportQuestions] = useState([]);
  const [reportData, setReportData] = useState({});
  const [showFinished, setShowFinished] = useState(false);
  const [checkedOut, setCheckedOut] = useState({});

  const [reportExpenses, setReportExpenses] = useState([]);

  return (
    <ReportContext.Provider
      value={{
        begin: [start, setStart],
        locationList: [venues, setVenues],
        location: [selectedLocation, setSelectedLocation],
        clockIn: [checkedIn, setCheckedIn],
        brandsData: [brands, setBrands],
        brandNames: [brandList, setBrandList],
        brand: [selectedBrand, setSelectedBrand],
        products: [brandProducts, setBrandProducts],
        questions: [reportQuestions, setReportQuestions],
        data: [reportData, setReportData],
        finished: [showFinished, setShowFinished],
        clockOut: [checkedOut, setCheckedOut],
        expenses: [reportExpenses, setReportExpenses],
      }}
    >
      {props.children}
    </ReportContext.Provider>
  );
};
