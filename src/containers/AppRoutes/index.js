import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { ContactPage } from '../../pages/Contact';
import { NotFound } from '../../pages/NotFound';
import { Profile } from '../../pages/Profile';
import { Codes } from '../../pages/Codes';

const routes = [
  {
    path: '/codes',
    element: <Codes />,
  },
  {
    path: '/findme',
    element: <ContactPage />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/',
    element: <Home />,
  },
];

export const AppRoutes = (props) => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};
