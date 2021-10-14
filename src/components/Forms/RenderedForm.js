import React, { useState, useContext } from 'react';
import { ReportContext } from '../../context/ReportContext';

// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { FormSelect, Textfield, FormCheckbox } from './';

const RenderedForm = (props) => {
  const { data, questions } = useContext(ReportContext);
  const [reportQuestions, setReportQuestions] = questions;

  const [formData, setFormData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [reportData, setReportData] = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setReportData((prevState) => ({
      ...prevState,
      formResponse: formData,
    }));
  };

  const handleChange = (data) => {
    const value = Object.values(data);
    const key = Object.keys(data);
    setFormData((prevState) => ({
      ...prevState,
      [key[0]]: value[0],
    }));
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2> Event Questions</h2>
      <form action='/my-handling-form-page' method='post'>
        <Grid container spacing={2}>
          {reportQuestions
            ? reportQuestions.map((item, index) => {
                console.log(reportData.formResponse.question);
                if (item.type === 'text') {
                  return <Textfield data={item.content} key={index} />;
                }
                if (item.type === 'select') {
                  return (
                    <FormSelect
                      callback={handleChange}
                      label={item.type}
                      data={item.choices}
                      question={item.question}
                      key={index}
                      // value={reportData.formResponse.question ? }
                    />
                  );
                }
                if (item.type === 'checkbox') {
                  return (
                    <FormCheckbox
                      callback={handleChange}
                      label={item.type}
                      data={item.choices}
                      question={item.question}
                      key={index}
                    />
                  );
                }
              })
            : null}
          <Grid item xs={8}>
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
