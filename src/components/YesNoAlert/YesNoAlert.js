import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import ButtonMain from '../ButtonMain/ButtonMain';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  maxHeight: '95vh',
};

const YesNoAlert = (props) => {
  const handleClose = () => props.handleClose();

  const handleOk = () => {
    props.callback();
    handleClose();
  };

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <p
            style={{
              textAlign: 'center',
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
          >
            {props.message}
          </p>
          <ButtonMain onClick={handleOk} variant='outlined' fullWidth>
            Yes
          </ButtonMain>
          <div style={{ marginTop: '20px' }}></div>
          <ButtonMain onClick={handleClose} variant='outlined' fullWidth>
            No
          </ButtonMain>
        </Box>
      </Modal>
    </div>
  );
};

export default YesNoAlert;
