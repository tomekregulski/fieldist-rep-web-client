import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import { ReportProvider } from './context/ReportContext';

import NavbarSwitch from './components/Navbar/NavbarSwitch';
import { Login, Reports } from './pages';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
      <NavbarSwitch />
      <Switch>
        <SessionProvider>
          <ReportProvider>
            <ProtectedRoute exact path={'/'} component={Reports} />
            <Route exact path='/login' component={Login} />
          </ReportProvider>
        </SessionProvider>
      </Switch>
    </>
  );
}

export default App;
