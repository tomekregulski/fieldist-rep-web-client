import React from 'react';
import TextField from '@mui/material/TextField';

const Textfield = (props) => {
  const handleInput = (event) => {
    props.callback({
      [props.target]: event.target.value,
    });
  };

  console.log(props);

  return (
    <div>
      <TextField
        onChange={handleInput}
        label={props.data && props.data}
        variant='standard'
        value={props.value}
      />
    </div>
  );
};

export default Textfield;
