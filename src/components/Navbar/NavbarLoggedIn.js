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
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to='/' style={{ marginLeft: '30px' }}>
          <img
            style={{ width: '10rem', margin: '.5rem 0 1rem 1rem' }}
            src={image}
            alt='Intelly'
          />
        </Link>
        <div>
          {/* <Button
            style={{ marginTop: '15px' }}
            variant='outlined'
            fullWidth
            onClick={handleClose}
          >
            Close
          </Button> */}
          <Button
            variant='outlined'
            style={{ marginRight: '15px' }}
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
          <Link
            style={{ marginRight: '30px', textDecoration: 'none' }}
            to='/store-visits'
          >
            <Button variant='outlined'>Store Visits</Button>
          </Link>
        </div>
      </nav>
      <div
        style={{ height: '48px', backgroundColor: 'rgba(0, 180, 249, 0.872)' }}
      ></div>
    </>
  );
};

export default NavbarLoggedIn;
