import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLoggedIn = (props) => {
  const { handleLogout } = props;

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '30px',
      }}
    >
      <Link to='/' style={{ marginLeft: '30px' }}>
        Fieldist
      </Link>
      <div>
        <button style={{ marginRight: '15px' }} onClick={() => handleLogout()}>
          Logout
        </button>
        <Link style={{ marginRight: '30px' }} to='/reports'>
          Reports
        </Link>
      </div>
    </nav>
  );
};

export default NavbarLoggedIn;
