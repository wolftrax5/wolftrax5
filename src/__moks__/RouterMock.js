import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ThemeMock from './ThemeMock';

const history = createBrowserHistory();

const RouterMock = (props) => (
  <ThemeMock>
    <Router history={history}>{props.children}</Router>
  </ThemeMock>
);

export default RouterMock;
