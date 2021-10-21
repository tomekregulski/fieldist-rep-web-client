import React, { useContext, useEffect, useState } from 'react';
import { ReportContext } from '../../context/ReportContext';

import Photos from '../Photos/Photos';

const ExpensePhotos = (props) => {
  // const { expPhotos } = useContext(ReportContext);
  const [expensePhoto, setExpensePhoto] = useState('');

  useEffect(() => {
    props.callback({ [props.target]: expensePhoto });
  }, [expensePhoto]);

  const handleExpensePhotos = (data) => {
    console.log(data);
    setExpensePhoto(data);
  };

  return (
    <div>
      <Photos callback={handleExpensePhotos} />
    </div>
  );
};

export default ExpensePhotos;
