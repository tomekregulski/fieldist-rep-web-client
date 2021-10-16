import React, { useContext, useState, useEffect } from 'react';

import { AuthContext } from '../../context/AuthContext';

import image from '../../images/intelly_logo.png';

import Button from '@mui/material/Button';

const NavbarLoggedIn = (props) => {
  const { user } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = user;

  const [query, setQuery] = useState({});

  const { handleLogout } = props;

  useEffect(() => {
    if (Object.keys(userData).length) {
      setQuery({
        token: userData.token,
      });
    }
  }, [userData]);

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
        <a href={`https://gallant-wing-415919.netlify.app/?${query.token}`}>
          <img
            style={{ width: '10rem', margin: '.5rem 0 .5rem 0' }}
            src={image}
            alt='Intelly'
          />
        </a>
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
