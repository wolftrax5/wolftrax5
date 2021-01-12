import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '../../components/AppLayout';
import { Home } from '../../pages/Home';
import { ContactPage } from '../../pages/Contact';
import { NotFound } from '../../pages/NotFound';
import { Profile } from '../../pages/Profile';

const Codes = () => (
  <AppLayout>
    <h1>Code</h1>
  </AppLayout>
);

export const AppRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/codes' exact component={Codes} />
        <Route path='/findme' exact component={ContactPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
};
