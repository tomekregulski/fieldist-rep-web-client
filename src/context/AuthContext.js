import React, { useState, createContext, useEffect } from 'react';
// import axios from 'axios';
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log('auth effect');
    if (JSON.parse(localStorage.getItem('user'))) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ auth: [isAuth, setIsAuth], user: [userData, setUserData] }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
