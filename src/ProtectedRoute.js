import React, { useContext, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';

import axios from 'axios';

const ProtectedRoute = (props) => {
  const { auth, user } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [isAuth, setIsAuth] = auth;
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = user;
  const [isLoading, setIsLoading] = useState(true);
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    if (window.location.href.includes('?')) {
      const query = window.location.href.split('?');
      console.log(query[1].split('&'));
      setCredentials(query[1].split('&'));
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (credentials.length) {
      const payload = {
        email: 'admin@fieldist.com',
        password: 'admin',
      };
      return axios
        .post('https://fieldist-back-end.herokuapp.com/api/users/login', {
          // .post('http://localhost:5001/api/users/login', {
          payload,
        })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
          }

          setIsAuth(true);
          console.log(response.data);
          setUserData({
            id: response.data.id,
            email: response.data.email,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            brand: response.data.brand,
            roles: response.data.roles,
          });
          setIsLoading(false);
        });
    }
  }, [credentials.length, setIsAuth, setUserData]);

  if (isLoading === true) {
    return <h1>Loading</h1>;
  }

  if ((isLoading === false && isAuth) === true) {
    return <Route {...props} />;
  } else {
    return <Redirect to={'/login'} />;
  }
};

export default ProtectedRoute;
