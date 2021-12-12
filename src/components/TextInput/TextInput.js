import React from 'react';

const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
