import React from 'react';

const Loading = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.2)',
        textAlign: 'center',
        position: 'fixed',
        color: 'black',
        fontSize: '24px',
        zIndex: '1',
      }}
    >
      <div style={{ margin: '50vh auto' }}>Loading... Please Wait</div>
    </div>
  );
};

export default Loading;
