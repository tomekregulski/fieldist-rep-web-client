import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

// import image from '../../images/intelly_logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { auth, user } = useContext(AuthContext);
  const [isAuth, setIsAuth] = auth;
  const [userData, setUserData] = user;

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length && password.length) {
      const payload = {
        email: email,
        password: password,
      };

      return axios
        .post('http://localhost:5001/api/users/login', {
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

          history.push('/');
        });
    }
  };

  return (
    <>
      <div>
        <img
          style={{
            display: 'block',
            width: '200px',
            margin: '0 auto 50px',
            paddingTop: '160px',
          }}
          // src={image}
          alt='Intelly'
        />
      </div>
      <Grid
        container
        spacing={3}
        direction={'column'}
        justify={'center'}
        alignItems={'center'}
      >
        <Grid item xs={12}>
          <TextField
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Password'
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Button variant='outlined' fullWidth onClick={(e) => handleSubmit(e)}>
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
