import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import NavbarLoggedIn from './NavbarLoggedIn';
// import NavbarLoggedOut from './NavbarLoggedOut';

import axios from 'axios';

function NavbarSwitch() {
  const { auth, user } = useContext(AuthContext);
  const [isAuth, setIsAuth] = auth;
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = user;

  const history = useHistory();

  const handleLogout = () => {
    axios.post('https://fieldist-back-end.herokuapp.com/api/users/logout');
    localStorage.removeItem('user');
    setUserData({});
    setIsAuth(false);
    history.push('/login');
  };

  if (isAuth === true) {
    return <NavbarLoggedIn handleLogout={handleLogout} />;
  } else {
    return null;
  }
}

export default NavbarSwitch;
