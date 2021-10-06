// import React from "react";
import React from 'react';
// import {
//   Login,
// } from './pages';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  if (!JSON.parse(localStorage.getItem('user'))) {
    return <Redirect to={'/login'} />;
  } else {
    return <Route {...props} />;
  }
};

export default ProtectedRoute;
