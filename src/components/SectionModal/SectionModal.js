import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import ButtonMain from '../ButtonMain/ButtonMain';

import { Inventory } from '../Inventory';
import RenderedForm from '../Forms/RenderedForm';
import EventPhotos from '../EventPhotos/EventPhotos';
import Expenses from '../Expenses/Expenses';
import Session from '../Session/Session';
import StopSession from '../StopSession/StopSession';
import SubmitForm from '../SubmitForm/SubmitForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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
  border: 'solid 1px rgba(0, 180, 249, 0.872)',
  borderRadius: '5px',
  textAlign: 'center',
  lineHeight: '70px',
  margin: '40px auto',
  display: 'block',
  color: 'rgba(0, 180, 249, 0.872)',
};

const SectionModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div style={{ margin: '0 auto' }}>
        <Button sx={button} onClick={handleOpen}>
          {props.title}
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {props.title === 'Inventory' ? (
            <Inventory callback={handleClose} />
          ) : null}
          {props.title === 'Form Response' ? (
            <RenderedForm callback={handleClose} />
          ) : null}
          {props.title === 'Photos' ? (
            <EventPhotos callback={handleClose} />
          ) : null}
          {props.title === 'Expenses' ? (
            <Expenses callback={handleClose} />
          ) : null}
          {props.title === 'Start New Store Visit' ? <Session /> : null}
          {props.title === 'Visit in Progress' ? <StopSession /> : null}
          {props.title === 'Submit Report' ? (
            <SubmitForm callback={handleClose} />
          ) : null}

          {/* {props.title === 'Photos' && (
            <ButtonMain
              style={{ marginTop: '15px' }}
              variant='outlined'
              fullWidth
              onClick={handleClose}
            >
              Close
            </ButtonMain>
          )} */}
        </Box>
      </Modal>
    </div>
  );
};

export default SectionModal;
