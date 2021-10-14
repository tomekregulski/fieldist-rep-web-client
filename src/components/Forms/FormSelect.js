import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormSelect = (props) => {
  const [label, setLabel] = useState('Select');

  const handleChange = (event) => {
    // event.preventDefault();
    setLabel(event.target.value);
    props.callback({
      [props.question]: event.target.value,
    });
  };

  // const handleSubmit = (event) => {
  //   props.callback({
  //     [props.question]: label,
  //   });
  //   console.log(label);
  //   console.log('testing');
  // };

  return (
    <Box sx={{ minWidth: 120 }}>
      <p>{props.question !== 'expense type' && props.question}</p>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={props.brand || ''}
          // label={label}
          onChange={handleChange}
        >
          {props.data.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        {/* <button onClick={handleSubmit}>Select</button> */}
      </FormControl>
    </Box>
  );
};

export default FormSelect;
