import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '../../components/AppLayout';
import { Home } from '../../pages/Home';
import { Profile } from '../../pages/Profile';
import { NotFound } from '../../pages/NotFound';

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

export const AppRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/codes' exact component={Codes} />
        <Route path='/findme' exact component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
};
