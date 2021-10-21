import React, { useEffect, useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import { ReportContext } from '../context/ReportContext';

import { FormSelect } from '../components/Forms';
import SectionCard from '../components/SectionCard/SectionCard';

import Grid from '@mui/material/Grid';

const sections = ['Inventory', 'Form Response', 'Photos', 'Expenses'];

const Reports = () => {
  const { clockIn, brandsData, brandNames } = useContext(SessionContext);

  const {
    brand,
    products,
    questions,
    expenses,
    data,
    finished,
    inventory,
    validated,
  } = useContext(ReportContext);

  // eslint-disable-next-line no-unused-vars
  const [checkedIn, setCheckedIn] = clockIn;
  const [brands, setBrands] = brandsData;
  const [brandList, setBrandList] = brandNames;
  const [selectedBrand, setSelectedBrand] = brand;
  const [reportQuestions, setReportQuestions] = questions;
  // eslint-disable-next-line no-unused-vars
  const [brandProducts, setBrandProducts] = products;
  // eslint-disable-next-line no-unused-vars
  const [reportExpenses, setReportExpenses] = expenses;
  // eslint-disable-next-line no-unused-vars
  const [inventoryData, setInventoryData] = inventory;
  // eslint-disable-next-line no-unused-vars
  const [showFinished, setShowFinished] = finished;
  // eslint-disable-next-line no-unused-vars
  const [reportData, setReportData] = data;
  // eslint-disable-next-line no-unused-vars
  const [reportValidated, setReportValidated] = validated;

  useEffect(() => {
    brands.length &&
      brands.map((brand) =>
        setBrandList((prevState) => [...prevState, brand.name])
      );
  }, [brands, setBrands]);

  useEffect(() => {
    Object.keys(reportData).length && setReportValidated(true);
  }, [reportData]);

  const brandSelect = (data) => {
    setBrandProducts([]);
    setReportData({});
    setReportExpenses([]);
    setInventoryData({});

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

  return (
    <Grid style={{ marginTop: '80px' }}>
      {Object.keys(checkedIn).length ? (
        <>
          <SectionCard title={'Visit in Progress'} />
        </>
      ) : (
        <SectionCard title={'Start New Store Visit'} />
      )}
      {checkedIn.lat && brandList.length ? (
        <div style={{ margin: '30px auto', width: '280px' }}>
          <FormSelect
            callback={brandSelect}
            data={brandList}
            label='brands'
            value={selectedBrand}
            question={'Select a Brand'}
          />
        </div>
      ) : null}
      {reportQuestions.length
        ? sections.map((section, index) => (
            <SectionCard title={section} key={index} />
          ))
        : null}
      {reportValidated === true ? (
        <>
          <SectionCard title={'Submit Report'} />
        </>
      ) : null}
    </Grid>
  );
};

export default Reports;
