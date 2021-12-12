import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';

import './Modal.css';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={'modal'} onClick={props.onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h2 className='modal-title'>{props.title}</h2>
        </div>
        <div className='modal-body'>{props.children}</div>
        <div className='modal-footer'>
          <Button
            color='rgba(0, 180, 249, 0.872)'
            label='Save'
            callback={props.onClose}
          />
        </div>
      </div>
    </div>,
    document.getElementById('root')
  );
};

export default Modal;
