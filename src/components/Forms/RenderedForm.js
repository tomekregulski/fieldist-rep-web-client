import React from 'react';
import { FormSelect, Textfield } from './';

const RenderedForm = (props) => {
  console.log(props.data);
  return (
    <div>
      <h1>hi</h1>
      <form action='/my-handling-form-page' method='post'>
        <ul>
          {props.data !== {} &&
            // && console.log(props.data)}
            props.data.map((item, index) => {
              if (item.type === 'text') {
                return (
                  <li key={index}>
                    <label for='name'>{item.content}</label>
                    <input type='text' id='name' name='user_name' />
                  </li>
                );
              }
              if (item.type === 'select') {
                return (
                  <li key={index}>
                    <label for='name'>{item.type}</label>
                    <select name='pets'>
                      <option value=''>--Please choose an option--</option>
                      {item.content.map((choice, index) => (
                        <option value={choice}>{choice}</option>
                      ))}
                    </select>
                  </li>
                );
              }
            })}
        </ul>
      </form>
    </div>
  );
};

export default RenderedForm;
