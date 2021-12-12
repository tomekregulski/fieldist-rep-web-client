import React from 'react';

import { FormSelect, Textfield } from '../Forms';
import ButtonMain from '../ButtonMain/ButtonMain';
import ExpensePhotos from '../ExpensePhotos/ExpensePhotos';

const ExpenseForm = (props) => {
  const handleInput = (data) => {
    props.callback(data);
  };

  const expenseTypes = [
    'Travel - Distance',
    'Travel - Other',
    'Purchase - Supplies',
    'Other',
  ];
  return (
    <div>
      <form style={{ margin: '0 auto', width: '280px' }}>
        <FormSelect
          data={expenseTypes}
          question={'Expense Type'}
          callback={handleInput}
          target={'expenseType'}
        />
        <div style={{ marginTop: '10px' }}></div>
        <Textfield
          label='Expense Amount'
          callback={handleInput}
          target='expenseAmount'
        />
        <div style={{ marginTop: '10px' }}></div>
        <Textfield
          label='Expense Notes'
          callback={handleInput}
          target='expenseNotes'
        />
        <div style={{ marginTop: '30px' }}></div>
        <ExpensePhotos callback={handleInput} target='expensePhoto' />
        <div style={{ marginTop: '20px' }}></div>
        <ButtonMain
          variant='outlined'
          fullWidth
          onClick={(event) => props.handleSave(event)}
        >
          Save New Expense
        </ButtonMain>
      </form>
    </div>
  );
};

export default ExpenseForm;
