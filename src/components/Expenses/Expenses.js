import React, { useState, useContext } from 'react';
import { ReportContext } from '../../context/ReportContext';

import ExpenseTable from './ExpenseTable';
import Button from '@mui/material/Button';

const Expenses = () => {
  const { expenses } = useContext(ReportContext);
  // eslint-disable-next-line no-unused-vars
  const [reportExpenses, setReportExpenses] = expenses;
  const [show, setShow] = useState(false);
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
    setShow(false);
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
      <p>Please report any approved expenses for this report</p>
      <Button onClick={() => setShow(!show)}>Add new expense</Button>
      {show === true ? (
        <>
          <ExpenseTable callback={handleInput} />
          <Button
            variant='outlined'
            fullWidth
            onClick={(event) => handleSave(event)}
          >
            Save
          </Button>
        </>
      ) : null}

      {reportExpenses
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
    </div>
  );
};

export default Expenses;
