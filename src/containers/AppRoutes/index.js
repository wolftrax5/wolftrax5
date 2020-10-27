import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '../../components/AppLayout';

import { Home } from '../../pages/Home';

const Profile = () => (
  <AppLayout>
    <h1>Profile</h1>
  </AppLayout>
);
const Codes = () => (
  <AppLayout>
    <h1>Code</h1>
  </AppLayout>
);
const Contact = () => (
  <AppLayout>
    <h1>Contact</h1>
  </AppLayout>
);
const Fory = () => <h1>404</h1>;

export const AppRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/codes' exact component={Codes} />
        <Route path='/findme' exact component={Contact} />
        <Route component={Fory} />
      </Switch>
    </Router>
  );
};
