import React from 'react';
import TextField from '@mui/material/TextField';

const Textfield = (props) => {
  const handleInput = (event) => {
    props.callback({
      [props.target]: event.target.value,
    });
  };

  return (
    <div>
      <TextField
        onChange={handleInput}
        label={props.label && props.label}
        variant='standard'
        value={props.value}
      />
    </div>
  );
};

export default Textfield;
