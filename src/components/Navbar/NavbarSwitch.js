import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import NavbarLoggedIn from './NavbarLoggedIn';
import NavbarLoggedOut from './NavbarLoggedOut';

import axios from 'axios';

function NavbarSwitch() {
  const { auth, user } = useContext(AuthContext);
  const [isAuth, setIsAuth] = auth;
  const [userData, setUserData] = user;

  const handleLogout = () => {
    axios.post('http://localhost:5001/api/users/logout');
    localStorage.removeItem('user');
    setUserData({});
    setIsAuth(false);
  };

  if (isAuth === true) {
    return <NavbarLoggedIn handleLogout={handleLogout} />;
  } else {
    return <NavbarLoggedOut />;
  }
}

export default NavbarSwitch;
