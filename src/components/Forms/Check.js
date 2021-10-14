import React from 'react';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Check = (props) => {
  console.log(props);

  const handleChange = (event) => {
    props.callback([event.target.name, event.target.checked, props.question]);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} variant='standard'>
        <FormLabel component='legend'>{props.question}</FormLabel>
        <FormGroup>
          {props.data.map((item, index) => {
            let checked = false;
            if (props.value.includes(item)) {
              checked = true;
            }
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={checked || ''}
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

export default Check;
