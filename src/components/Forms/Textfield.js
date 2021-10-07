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
        label={props.data && props.data}
        variant='standard'
      />
    </div>
  );
};

export default Textfield;
