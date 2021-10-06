import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLoggedIn = (props) => {
  const { handleLogout } = props;

  return (
    <div>
      <h1>Let's get started</h1>
      <button onClick={() => handleLogout()}>Logout</button>
      <Link to='/reports'>Reports</Link>
    </div>
  );
};

export default NavbarLoggedIn;
