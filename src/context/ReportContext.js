import React, { useState, createContext } from 'react';
// import axios from 'axios';
export const ReportContext = createContext();

export const ReportProvider = (props) => {
  const [start, setStart] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [checkedIn, setCheckedIn] = useState({});
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brandProducts, setBrandProducts] = useState([]);
  const [reportQuestions, setReportQuestions] = useState([]);
  const [reportData, setReportData] = useState({});
  const [showFinished, setShowFinished] = useState(false);
  const [checkedOut, setCheckedOut] = useState({});

  return (
    <ReportContext.Provider
      value={{
        begin: [start, setStart],
        location: [selectedLocation, setSelectedLocation],
        clockIn: [checkedIn, setCheckedIn],
        brand: [selectedBrand, setSelectedBrand],
        products: [brandProducts, setBrandProducts],
        questions: [reportQuestions, setReportQuestions],
        data: [reportData, setReportData],
        finished: [showFinished, setShowFinished],
        clockOut: [checkedOut, setCheckedOut],
      }}
    >
      {props.children}
    </ReportContext.Provider>
  );
};
