import React, { useState, createContext } from 'react';
export const ReportContext = createContext();

export const ReportProvider = (props) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brandProducts, setBrandProducts] = useState([]);
  const [reportQuestions, setReportQuestions] = useState([]);
  const [reportExpenses, setReportExpenses] = useState([]);
  const [reportData, setReportData] = useState({});
  const [showFinished, setShowFinished] = useState(false);

  return (
    <ReportContext.Provider
      value={{
        brand: [selectedBrand, setSelectedBrand],
        products: [brandProducts, setBrandProducts],
        questions: [reportQuestions, setReportQuestions],
        data: [reportData, setReportData],
        finished: [showFinished, setShowFinished],
        expenses: [reportExpenses, setReportExpenses],
      }}
    >
      {props.children}
    </ReportContext.Provider>
  );
};
