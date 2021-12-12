/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';

import Photos from '../Photos/Photos';
import YesNoAlert from '../YesNoAlert/YesNoAlert';

const ExpensePhotos = (props) => {
  const [expensePhoto, setExpensePhoto] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    props.callback({ expensePhoto: expensePhoto });
  }, [expensePhoto]);

  const handleExpensePhotos = (data) => {
    setExpensePhoto(data);
  };

  const closeModal = () => {
    setShow(false);
  };

  const deletePhoto = () => {
    setExpensePhoto('');
    setShow(false);
  };

  return (
    <div>
      {show && (
        <YesNoAlert
          open={show}
          message='Would you like to delete this photo?'
          handleClose={closeModal}
          callback={deletePhoto}
        />
      )}
      <Photos callback={handleExpensePhotos} type='expense_photo' />
      {expensePhoto && (
        <div style={{}}>
          <img
            onClick={() => setShow(true)}
            style={{
              display: 'block',
              width: '60%',
              maxWidth: '100px',
              margin: '25px auto 0',
            }}
            src={expensePhoto}
            alt={'photo of the receipt'}
          />
        </div>
      )}
    </div>
  );
};

export default ExpensePhotos;
