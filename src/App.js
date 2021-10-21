import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import { ReportProvider } from './context/ReportContext';

import NavbarSwitch from './components/Navbar/NavbarSwitch';
import { Login, Reports } from './pages';
import ProtectedRoute from './ProtectedRoute';

function App() {
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
