import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

import NavbarLoggedIn from './NavbarLoggedIn';

function NavbarSwitch() {
  const { auth, user } = useContext(AuthContext);
  const [isAuth, setIsAuth] = auth;
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = user;

  const history = useHistory();

  const handleLogout = () => {
    axios.post(
      'https://intelly-auth-service.herokuapp.com/api/users/logout'
      // 'httpslocalhost:5001/api/users/logout'
    );
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
