import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import NavbarSwitch from './components/Navbar/NavbarSwitch';
import { Dashboard, Login, Reports } from './pages';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const { auth } = useContext(AuthContext);
  const [isAuth, setIsAuth] = auth;

  return (
    <>
      <NavbarSwitch />
      <Switch>
        <ProtectedRoute exact path={'/'} component={Dashboard} />
        <ProtectedRoute exact path={'/reports'} component={Reports} />
        <Route exact path='/login' component={Login} />
      </Switch>
      {/* {isAuth === true ? <Dashboard /> : <Login />} */}
    </>
  );
}

export default App;
