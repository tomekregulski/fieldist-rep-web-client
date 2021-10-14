import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Inventory } from '../Inventory';
import RenderedForm from '../Forms/RenderedForm';
import Photos from '../Photos/Photos';
import Expenses from '../Expenses/Expenses';

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

const SectionModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{props.title}</Button>
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
          <Button
            style={{ marginTop: '15px' }}
            variant='outlined'
            fullWidth
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SectionModal;
