import React, { useContext, useState, useEffect } from 'react';

import { AuthContext } from '../../context/AuthContext';

import { withStyles } from '@material-ui/styles';
import styles from './NavStyles';
import image from '../../images/intelly_logo.png';

import UserMenu from '../UserMenu/UserMenu';

const NavbarLoggedIn = (props) => {
  const { user } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = user;
  const [query, setQuery] = useState({});

  const { classes, handleLogout } = props;

  useEffect(() => {
    if (Object.keys(userData).length) {
      setQuery({
        token: userData.token,
      });
    }
  }, [userData]);

  return (
    <nav className={classes.nav}>
      <div className={classes.navLinks}>
        <a href={`https://gallant-wing-415919.netlify.app/?${query.token}`}>
          <img className={classes.logo} src={image} alt='Intelly' />
        </a>
        <UserMenu handleLogout={handleLogout} />
      </div>
    </nav>
  );
};

export default withStyles(styles)(NavbarLoggedIn);
