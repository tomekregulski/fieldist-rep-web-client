import React, { useState, createContext, useEffect } from 'react';
// import axios from 'axios';
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user'))) {
      setIsAuth(true);
      const user = JSON.parse(localStorage.getItem('user'));

      setUserData({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        roles: user.roles,
        brand_id: user.brand_id,
      });
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
