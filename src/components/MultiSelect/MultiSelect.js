import React from 'react';

const MultiSelect = (props) => {
  const handleCallback = (value) => {
    props.callback(value);
  };
  return (
    <div>
      <label>{props.label}</label>
      <select onChange={(e) => handleCallback(e.target.value)}>
        <option value=''>--Please Select an Option</option>
        {props.options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MultiSelect;
