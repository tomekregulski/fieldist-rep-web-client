import React, { useContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import { ReportProvider } from './context/ReportContext';
import { AuthContext } from './context/AuthContext';

import Loading from './components/Loading/Loading';

import NavbarSwitch from './components/Navbar/NavbarSwitch';
import { Login, Reports } from './pages';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const { load } = useContext(AuthContext);
  const [loading, setLoading] = load;

  return (
    <div
      style={{
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      }}
    >
      {loading && <Loading />}
      <NavbarSwitch />
      <Switch>
        <SessionProvider>
          <ReportProvider>
            <ProtectedRoute exact path={'/'} component={Reports} />
            <Route exact path='/login' component={Login} />
          </ReportProvider>
        </SessionProvider>
      </Switch>
    </div>
  );
}

export default App;
