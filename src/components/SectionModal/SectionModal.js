import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { Inventory } from '../Inventory';
import RenderedForm from '../Forms/RenderedForm';
import Photos from '../Photos/Photos';
import Expenses from '../Expenses/Expenses';
import Session from '../Session/Session';
import StopSession from '../StopSession/StopSession';
import SubmitForm from '../SubmitForm/SubmitForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '95vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  maxHeight: '95vh',
};

const button = {
  height: '80px',
  width: '280px',
  border: 'solid 1px blue',
  borderRadius: '10px',
  textAlign: 'center',
  lineHeight: '70px',
  margin: '40px auto',
  display: 'block',
};

const SectionModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={button} onClick={handleOpen}>
        {props.title}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {props.title === 'Inventory' ? <Inventory /> : null}
          {props.title === 'Form Response' ? <RenderedForm /> : null}
          {props.title === 'Photos' ? <Photos /> : null}
          {props.title === 'Expenses' ? <Expenses /> : null}
          {props.title === 'Start New Store Visit' ? <Session /> : null}
          {props.title === 'Visit in Progress' ? <StopSession /> : null}
          {props.title === 'Submit Report' ? <SubmitForm /> : null}

          {props.title !== 'Start New Store Visit' && (
            <Button
              style={{ marginTop: '15px' }}
              variant='outlined'
              fullWidth
              onClick={handleClose}
            >
              Close
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default SectionModal;
