import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormSelect = (props) => {
  const [label, setLabel] = useState('Select');

  const handleChange = (event) => {
    setLabel(event.target.value);
    props.callback({
      [props.question]: event.target.value,
    });
  };

  return (
    <Box
      style={{
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      }}
      sx={{ minWidth: 120 }}
    >
      <p>{props.question !== 'expense type' && props.question}</p>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          defaultValue=''
          value={props.value || ''}
          onChange={handleChange}
        >
          {props.data.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormSelect;
