import React, { useContext } from 'react';
import { ReportContext } from '../../context/ReportContext';

import Photos from '../Photos/Photos';

const EventPhotos = () => {
  const { photos } = useContext(ReportContext);
  // eslint-disable-next-line no-unused-vars
  const [eventPhotos, setEventPhotos] = photos;

  const handleEventPhotos = (data) => {
    setEventPhotos((prevState) => [...prevState, data]);
  };

  return (
    <div>
      <Photos callback={handleEventPhotos} />
    </div>
  );
};

export default EventPhotos;
