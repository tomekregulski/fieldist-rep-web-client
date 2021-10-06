import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavbarSwitch from './components/Navbar/NavbarSwitch';
import { Dashboard, Login, Reports } from './pages';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
      <NavbarSwitch />
      <Switch>
        <ProtectedRoute exact path={'/'} component={Dashboard} />
        <ProtectedRoute exact path={'/reports'} component={Reports} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </>
  );
}

export default App;
