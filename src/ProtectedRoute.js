import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';

const ProtectedRoute = (props) => {
  const { auth } = useContext(AuthContext);
  const [isAuth, setIsAuth] = auth;
  // if (!JSON.parse(localStorage.getItem('user'))) {
  if (isAuth === true) {
    return <Route {...props} />;
  } else {
    return <Redirect to={'/login'} />;
  }
};

export default ProtectedRoute;
