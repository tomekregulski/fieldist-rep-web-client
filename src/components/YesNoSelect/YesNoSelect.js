import React from 'react';

const YesNoSelect = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <select style={{ display: 'block' }}>
        <option value='Yes'>Yes</option>
        <option value='No'>No</option>
      </select>
    </div>
  );
};

export default YesNoSelect;
