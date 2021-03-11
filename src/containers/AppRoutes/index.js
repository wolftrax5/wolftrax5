import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { ContactPage } from '../../pages/Contact';
import { NotFound } from '../../pages/NotFound';
import { Profile } from '../../pages/Profile';
import { Codes } from '../../pages/Codes';

const routes = [
  {
    path: '/codes',
    component: Codes,
  },
  {
    path: '/findme',
    component: ContactPage,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/',
    component: Home,
  },
];

export const AppRoutes = (props) => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact
            component={route.component}
          />
        ))}
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
};
