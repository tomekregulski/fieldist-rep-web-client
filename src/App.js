import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import { ReportProvider } from './context/ReportContext';

import NavbarSwitch from './components/Navbar/NavbarSwitch';
import { Login, Audits } from './pages';
// import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
      <NavbarSwitch />
      <Switch>
        <SessionProvider>
          <ReportProvider>
            <Route exact path={'/'} component={Audits} />
            <Route exact path='/login' component={Login} />
          </ReportProvider>
        </SessionProvider>
      </Switch>
    </>
  );
}

export default App;
