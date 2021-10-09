import React, { useState, useContext } from 'react';
import { ReportContext } from '../../context/ReportContext';

// import { Textfield } from '../Forms';
import ExpenseTable from './ExpenseTable';

import Button from '@mui/material/Button';

const Expenses = () => {
  const { data } = useContext(ReportContext);
  // eslint-disable-next-line no-unused-vars
  const [reportData, setReportData] = data;

  const [show, setShow] = useState(false);
  const [newExpense, setNewExpense] = useState({});

  const handleInput = (data) => {
    const value = Object.values(data)[0];
    const key = Object.keys(data)[0];

    setNewExpense((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSave = () => {
    setReportData((prevState) => ({
      ...prevState,
      expenses: reportData.expenses
        ? [...reportData.expenses, newExpense]
        : [newExpense],
    }));
    console.log('saved new expense');
    setShow(false);
  };

  return (
    <div>
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
      {reportData.expenses && console.log(reportData.expenses)}
      {reportData.expenses
        ? reportData.expenses.map(
            (expense, index) => (
              <p key={index}>
                Type: {expense.expenseType} | Amount: ${expense.expenseAmount} |
                Notes:
                {expense.expenseNotes.length < 10
                  ? expense.expenseNotes
                  : expense.expenseNotes.substring(0, 10) + '...'}
              </p>
            )
            // console.log(expense.expenseAmount)
          )
        : null}
    </div>
  );
};

export default Expenses;
