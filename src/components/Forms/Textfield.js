import React from 'react';
import TextField from '@mui/material/TextField';

const Textfield = (props) => {
  return (
    <div>
      <TextField label={props.data && props.data} variant='standard' />
    </div>
  );
};

export default Textfield;
