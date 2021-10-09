import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome Back {user[0].first_name && user[0].first_name}!</h1>
    </div>
  );
};

export default Dashboard;
