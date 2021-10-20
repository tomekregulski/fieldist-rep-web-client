import React, { useState, useContext } from 'react';
import { ReportContext } from '../../context/ReportContext';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { FormSelect, Check } from './';

const RenderedForm = (props) => {
  const { data, questions } = useContext(ReportContext);
  // eslint-disable-next-line no-unused-vars
  const [reportQuestions, setReportQuestions] = questions;
  const [reportData, setReportData] = data;

  const [formData, setFormData] = useState(reportData.formResponse || {});

  const handleSubmit = (event) => {
    event.preventDefault();
    setReportData((prevState) => ({
      ...prevState,
      formResponse: formData,
    }));
  };

  const handleCheckChange = (data) => {
    let dataArr = formData[data[2]] || [];
    if (data[1] === true && !dataArr.includes(data[0])) {
      dataArr.push(data[0]);
    }
    if (data[1] === false && dataArr.includes(data[0])) {
      dataArr = dataArr.filter((item) => item !== data[0]);
    }

    setFormData((prevState) => ({
      ...prevState,
      [data[2]]: dataArr,
    }));
  };

  const handleChange = (data) => {
    const value = Object.values(data)[0];
    const key = Object.keys(data);
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2> Event Questions</h2>
      <form
        style={{ minWidth: '300px', maxWidth: '800px' }}
        action='/my-handling-form-page'
        method='post'
      >
        <Grid container spacing={2}>
          {reportQuestions
            ? reportQuestions.map((item, index) => {
                let value = '';
                let valueArray = [];
                if (formData.hasOwnProperty(item.question)) {
                  value = formData[item.question];
                  valueArray = formData[item.question];
                }
                if (item.type === 'select') {
                  return (
                    <FormSelect
                      callback={handleChange}
                      label={item.type}
                      data={item.choices}
                      question={item.question}
                      key={index}
                      value={value}
                    />
                  );
                }
                if (item.type === 'checkbox') {
                  return (
                    <Check
                      callback={handleCheckChange}
                      label={item.type}
                      data={item.choices}
                      question={item.question}
                      key={index}
                      value={valueArray}
                    />
                  );
                }
              })
            : null}
          <Grid item xs={12}>
            <Button
              variant='outlined'
              fullWidth
              onClick={(event) => handleSubmit(event)}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RenderedForm;
