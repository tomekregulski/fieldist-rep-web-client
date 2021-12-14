/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from 'react';
import { ReportContext } from '../../context/ReportContext';

import Photos from '../Photos/Photos';
import YesNoAlert from '../YesNoAlert/YesNoAlert';

import ButtonMain from '../ButtonMain/ButtonMain';

const EventPhotos = (props) => {
  const { photos } = useContext(ReportContext);
  // eslint-disable-next-line no-unused-vars
  const [eventPhotos, setEventPhotos] = photos;
  const [show, setShow] = useState(false);

  const handleEventPhotos = (data) => {
    setEventPhotos((prevState) => [...prevState, data]);
  };

  const closeModal = () => {
    setShow(false);
  };

  const deletePhoto = () => {
    setEventPhotos([]);
    setShow(false);
  };

  return (
    <div>
      <Photos callback={handleEventPhotos} type='event_photo' />
      {show && (
        <YesNoAlert
          open={show}
          message='Would you like to delete these photos?'
          handleClose={closeModal}
          callback={deletePhoto}
        />
      )}
      {eventPhotos.length > 0 && (
        <div style={{ display: 'flex' }}>
          {eventPhotos.map((photo, index) => (
            <img
              style={{
                display: 'block',
                width: '60%',
                maxWidth: '100px',
                margin: '25px auto 0',
              }}
              key={index}
              src={photo}
            />
          ))}
        </div>
      )}
      {eventPhotos.length > 0 && (
        <ButtonMain
          style={{ marginTop: '15px' }}
          variant='outlined'
          fullWidth
          onClick={() => setShow(true)}
        >
          Delete Photos
        </ButtonMain>
      )}
      <ButtonMain
        style={{ marginTop: '15px' }}
        variant='outlined'
        fullWidth
        onClick={() => props.callback()}
      >
        Close
      </ButtonMain>
    </div>
  );
};

export default EventPhotos;
