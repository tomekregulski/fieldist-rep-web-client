import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../images/intelly_logo.png';

import Button from '@mui/material/Button';

const NavbarLoggedIn = (props) => {
  const { handleLogout } = props;

  return (
    <>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Link
          to='/'
          // style={{ marginLeft: '30px' }}
        >
          <img
            style={{ width: '10rem', margin: '.5rem 0 .5rem 0' }}
            src={image}
            alt='Intelly'
          />
        </Link>
        <div>
          <Button
            variant='outlined'
            style={{ marginBottom: '10px' }}
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </div>
      </nav>
      <div
        style={{ height: '48px', backgroundColor: 'rgba(0, 180, 249, 0.872)' }}
      ></div>
    </>
  );
};

export default NavbarLoggedIn;
