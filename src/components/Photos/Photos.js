// import React, { useState, useEffect, useMemo } from 'react';
// import { useDropzone } from 'react-dropzone';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// const baseStyle = {
//   flex: 1,
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100%',
//   padding: '20px',
//   borderWidth: 2,
//   borderRadius: '2rem',
//   borderColor: '#eeeeee',
//   borderStyle: 'dashed',
//   backgroundColor: '#fafafa',
//   color: '#8d8c8c',
//   outline: 'none',
//   transition: 'border .3s ease-in-out',
// };

// const activeStyle = {
//   borderColor: 'blue',
// };

// const acceptStyle = {
//   borderColor: 'green',
// };

// const rejectStyle = {
//   borderColor: 'red',
// };

const Photos = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  // const {
  //   getRootProps,
  //   getInputProps,
  //   isDragActive,
  //   isDragAccept,
  //   isDragReject,
  // } = useDropzone({
  //   accept: 'image/*',
  //   onDrop: (files) => uploadImage(files),
  // });

  // const [responseResult, setResponseResult] = useState('');
  // const [url, SetUrl] = useState([]);

  // useEffect(() => {
  //   console.log(url);
  // }, [url]);

  // const uploadImage = (images) => {
  //   images.map((image) => {
  //     const data = new FormData();
  //     data.append('file', image);
  //     data.append('upload_preset', 'fieldist');
  //     data.append('cloud_name', 'yup-schlepp');
  //     fetch('https://api.cloudinary.com/v1_1/yup-schlepp/image/upload', {
  //       method: 'POST',
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => SetUrl((prevState) => [...prevState, data.url]))
  //       .catch((err) => {
  //         console.log(err);
  //         setResponseResult('fail');
  //       });
  //   });
  // };

  // const putImages = () => {
  // if (url) {
  //   fetch(`/api/reports/${report.all.report_template.id}`, {
  //     method: 'PUT',
  //     headers: postHeader(),
  //     body: JSON.stringify({ photos: url }),
  //   })
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));
  // }

  //   if (url) {
  //     console.log(url);
  //   }
  // };

  // const style = useMemo(
  //   () => ({
  //     ...baseStyle,
  //     ...(isDragActive ? activeStyle : {}),
  //     ...(isDragAccept ? acceptStyle : {}),
  //     ...(isDragReject ? rejectStyle : {}),
  //   }),
  //   [isDragActive, isDragReject, isDragAccept]
  // );

  // const files = url.map((src) => (
  //   <img key={src} className='upload-img-multi mr-1' src={src} alt={src} />
  // ));

  return (
    <div>
      <p>upload photos for this report</p>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {/* <>
        <section>
          <div>
            <div>
              <div {...getRootProps({ style, className: 'dropzone' })}>
                <label className='d-flex flex-column align-items-center justify-content-center'>
                  <div {...getInputProps()} />
                  <p className='text-center'>
                    Drag 'n' drop some files here, or click to select files
                  </p>
                  <div className='d-flex'>
                    <button>Open</button>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  {url.map((src) => (
                    <img key={src} src={src} alt={src} />
                  ))}
                </div>
                <button onClick={putImages}>Save</button>
              </div>
            </div>
          </div>
        </section>
        {responseResult === 'fail' && (
          <alert>Something's not quite right...</alert>
        )}
      </> */}
    </div>
  );
};

export default Photos;
