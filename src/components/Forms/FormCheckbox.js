import React from 'react';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FormCheckbox = (props) => {
  console.log(props.value);

  const handleChange = (event) => {
    props.callback({
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} variant='standard'>
        <FormLabel component='legend'>{props.question}</FormLabel>
        <FormGroup>
          {props.data.map((item, index) => {
            let checked = false;
            console.log(item);
            if (
              Object.keys(props.value).includes(item) &&
              props.value[item] === true
            ) {
              checked = true;
            }
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    name={item}
                  />
                }
                label={item}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default FormCheckbox;
