import React, { useState, createContext } from 'react';
// import axios from 'axios';
export const ReportContext = createContext();

export const AuthProvider = (props) => {
  const [brand, setBrand] = useState('');
  const [questions, setQuestions] = useState([]);
  const [products, setProducts] = useState([]);
  const [reportData, setReportData] = useState([]);

  return (
    <ReportContext.Provider
      value={{
        brand: [brand, setBrand],
        questions: [questions, setQuestions],
        products: [products, setProducts],
        reportData: [reportData, setReportData],
      }}
    >
      {props.children}
    </ReportContext.Provider>
  );
};
