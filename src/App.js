import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ReportProvider } from './context/ReportContext';

import NavbarSwitch from './components/Navbar/NavbarSwitch';
import { Dashboard, Login, Audits } from './pages';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
      <NavbarSwitch />
      <Switch>
        <ReportProvider>
          <ProtectedRoute exact path={'/'} component={Dashboard} />
          <ProtectedRoute exact path={'/store-visits'} component={Audits} />
          <Route exact path='/login' component={Login} />
        </ReportProvider>
      </Switch>
    </>
  );
}

export default App;
