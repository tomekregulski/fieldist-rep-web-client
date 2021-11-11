import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import ButtonMain from '../ButtonMain/ButtonMain';

const Photos = (props) => {
  // const onDrop = useCallback((acceptedFiles) => {
  //   const newPhoto = acceptedFiles[0];
  //   props.callback(newPhoto);
  // }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop,
  // });

  const onChange = (e) => {
    props.callback(e.target.files[0]);
  };

  return (
    <div
      style={{
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
      <p>{props.title && props.title}</p>
      {/* <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <ButtonMain>Drop the files here ...</ButtonMain>
        ) : (
          <ButtonMain>Click here to select files</ButtonMain>
        )}
      </div> */}
      <input type='file' name='image' onChange={onChange} />
    </div>
  );
};

export default Photos;
