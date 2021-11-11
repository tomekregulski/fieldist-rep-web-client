import React, { useContext, useEffect, useState } from 'react';
import { ReportContext } from '../../context/ReportContext';

import Photos from '../Photos/Photos';

const ExpensePhotos = (props) => {
  // const { expPhotos } = useContext(ReportContext);
  const [expensePhoto, setExpensePhoto] = useState('');

  useEffect(() => {
    props.callback({ expensePhoto: expensePhoto });
  }, [expensePhoto]);

  const handleExpensePhotos = (data) => {
    setExpensePhoto(data);
  };

  return (
    <div>
      <Photos callback={handleExpensePhotos} type='expense_photo' />
    </div>
  );
};

export default ExpensePhotos;
