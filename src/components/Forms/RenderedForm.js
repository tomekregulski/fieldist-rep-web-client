import React, { useState } from 'react';

// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { FormSelect, Textfield, FormCheckbox } from './';

const RenderedForm = (props) => {
  const [reportData, setReportData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(reportData);
  };

  const handleChange = (data) => {
    const value = Object.values(data);
    const key = Object.keys(data);
    setReportData((prevState) => ({
      ...prevState,
      [key[0]]: value[0],
    }));
  };

  return (
    <div>
      <h1>---Report Form----</h1>
      <form action='/my-handling-form-page' method='post'>
        <Grid container spacing={2}>
          {props
            ? props.data.map((item, index) => {
                if (item.type === 'text') {
                  return (
                    <Grid item xs={8} key={index}>
                      <Textfield data={item.content} />
                    </Grid>
                  );
                }
                if (item.type === 'select') {
                  return (
                    <Grid item xs={8} key={index}>
                      <FormSelect
                        callback={handleChange}
                        label={item.type}
                        data={item.choices}
                        question={item.question}
                      />
                    </Grid>
                  );
                }
                if (item.type === 'checkbox') {
                  return (
                    <Grid item xs={8} key={index}>
                      <FormCheckbox
                        callback={handleChange}
                        label={item.type}
                        data={item.choices}
                        question={item.question}
                      />
                    </Grid>
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RenderedForm;
