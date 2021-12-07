import React, { useState, useContext } from 'react';
import { SessionContext } from '../../context/SessionContext';
import { ReportContext } from '../../context/ReportContext';

import ButtonMain from '../ButtonMain/ButtonMain';

const PhotoUpload = (props) => {
  const { currentDate, location } = useContext(SessionContext);
  const { brand } = useContext(ReportContext);
  const [selectedBrand, setSelectedBrand] = brand;
  const [selectedLocation, setSelectedLocation] = location;
  const [date, setDate] = currentDate;
  const [images, setImages] = useState([]);
  // const [url, setUrl] = useState([]);

  const uploadImage = () => {
    for (const image in images) {
      if (typeof images[image] === 'object') {
        console.log(images[image]);
        const name = `${selectedBrand}_WFM_Audits/${selectedBrand}_${
          selectedLocation.name
        }_${date.split('/').join('-')}_${props.type}_${image}`;

        const data = new FormData();
        data.append('file', images[image]);
        data.append('public_id', name);
        data.append('upload_preset', 'tutorial');
        data.append('cloud_name', 'intelly');
        fetch('https://api.cloudinary.com/v1_1/intelly/image/upload', {
          method: 'post',
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) => {
            props.callback(data.url);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <div>
      <div>
        {/* <input
          type='file'
          multiple
          onChange={(e) => setImages(e.target.files)}
        ></input>
        <button onClick={uploadImage}>Upload</button> */}
        <label
          class='custom-file-upload'
          style={{
            padding: '6px 12px',
            cursor: 'pointer',
            boxShadow: 'none',
            display: 'block',
            margin: '20px auto 20px',
            textTransform: 'none',
            fontSize: 16,
            border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: '#fff',
            color: 'rgba(0, 180, 249, 0.872)',
            borderColor: 'rgba(0, 180, 249, 0.872)',
            borderRadius: '5px',
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
            textAlign: 'center',
          }}
        >
          <input
            type='file'
            multiple
            onChange={(e) => setImages(e.target.files)}
            style={{ display: 'none' }}
          />
          Select A Photo to Upload
        </label>
        <ButtonMain onClick={uploadImage}>Save Photo</ButtonMain>
      </div>
    </div>
  );
};

export default PhotoUpload;
