import React, { useState, useContext } from 'react';
import { ReportContext } from '../../context/ReportContext';

import ExpenseTable from './ExpenseTable';
import ExpenseForm from './ExpenseForm';
import ButtonMain from '../ButtonMain/ButtonMain';

const Expenses = (props) => {
  const { expenses } = useContext(ReportContext);
  // eslint-disable-next-line no-unused-vars
  const [reportExpenses, setReportExpenses] = expenses;
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [newExpense, setNewExpense] = useState({});

  const handleInput = (data) => {
    console.log(data);
    const value = Object.values(data)[0];
    const key = Object.keys(data)[0];

    setNewExpense((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSave = () => {
    setReportExpenses((prevState) => [...prevState, newExpense]);
    handleExpenseButton();
  };

  const handleExpenseButton = () => {
    setShow(!show);
    setShowButton(!showButton);
  };

  return (
    <div
      style={{
        minWidth: '300px',
        maxWidth: '800px',
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
      <p style={{ textAlign: 'center', marginBottom: '50px' }}>
        Please report any approved expenses for this report
      </p>
      {showButton && (
        <ButtonMain onClick={() => handleExpenseButton()}>
          Add new expense
        </ButtonMain>
      )}
      {show === true ? (
        <ExpenseForm callback={handleInput} handleSave={handleSave} />
      ) : null}

      {show === false && reportExpenses
        ? reportExpenses.map((expense, index) => (
            <p key={index}>
              Type: {expense.expenseType} | Amount: ${expense.expenseAmount} |
              Notes:
              {expense.expenseNotes
                ? expense.expenseNotes.length < 10
                  ? expense.expenseNotes
                  : expense.expenseNotes.substring(0, 10) + '...'
                : ' N/A'}{' '}
              | Photo:
              {expense.expensePhoto ? ' Yes' : ' No'}
            </p>
          ))
        : null}
      {show === false ? (
        <ButtonMain
          variant='outlined'
          fullWidth
          onClick={() => props.callback()}
        >
          Close
        </ButtonMain>
      ) : null}
    </div>
  );
};

export default Expenses;
