import React, { useState, useEffect, createContext } from 'react';
export const ReportContext = createContext();

export const ReportProvider = (props) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brandProducts, setBrandProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [reportQuestions, setReportQuestions] = useState([]);
  const [reportExpenses, setReportExpenses] = useState([]);
  const [inventoryData, setInventoryData] = useState({});
  const [reportData, setReportData] = useState({});
  const [showFinished, setShowFinished] = useState(false);
  const [reportValidated, setReportValidated] = useState(false);
  const [reportPhotos, setReportPhotos] = useState([]);
  const [expensePhotos, setExpensePhotos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('currentReport')) {
      const data = JSON.parse(localStorage.getItem('currentReport'));
      data.brand && setSelectedBrand(data.brand);
      data.brandProducts && setBrandProducts(data.brandProducts);
      data.selectedProducts && setSelectedProducts(data.selectedProducts);
      data.reportQuestions && setReportQuestions(data.reportQuestions);
      data.reportExpenses && setReportExpenses(data.reportExpenses);
      data.inventoryData && setInventoryData(data.inventoryData);
      data.reportData && setReportData(data.reportData);
      data.photos = setReportPhotos(data.photos);
      data.expPhotos = setExpensePhotos(data.expPhotos);
    }
  }, []);

  useEffect(() => {
    const currentReport = {
      brand: selectedBrand || '',
      brandProducts: brandProducts || '',
      selectedProducts: selectedProducts || '',
      reportQuestions: reportQuestions || '',
      reportExpenses: reportExpenses || '',
      inventoryData: inventoryData || '',
      reportData: reportData || '',
      photos: reportPhotos || '',
      expPhotos: expensePhotos || '',
    };
    localStorage.setItem('currentReport', JSON.stringify(currentReport));
  }, [
    brandProducts,
    inventoryData,
    reportData,
    reportExpenses,
    reportQuestions,
    selectedBrand,
    selectedProducts,
    reportPhotos,
    expensePhotos,
  ]);

  const resetReport = () => {
    setSelectedBrand(false);
    setBrandProducts([]);
    setSelectedProducts({});
    setReportQuestions([]);
    setReportExpenses([]);
    setInventoryData({});
    setReportData({});
    setShowFinished(false);
    setReportPhotos([]);
    setExpensePhotos([]);
    setReportValidated(false);
  };

  return (
    <ReportContext.Provider
      value={{
        brand: [selectedBrand, setSelectedBrand],
        products: [brandProducts, setBrandProducts],
        reportedProducts: [selectedProducts, setSelectedProducts],
        inventory: [inventoryData, setInventoryData],
        questions: [reportQuestions, setReportQuestions],
        data: [reportData, setReportData],
        finished: [showFinished, setShowFinished],
        expenses: [reportExpenses, setReportExpenses],
        resetRpt: resetReport,
        validated: [reportValidated, setReportValidated],
        photos: [reportPhotos, setReportPhotos],
        expPhotos: [expensePhotos, setExpensePhotos],
      }}
    >
      {props.children}
    </ReportContext.Provider>
  );
};
