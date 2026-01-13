import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ThemeMock from './ThemeMock';

const RouterMock = (props) => (
  <ThemeMock>
    <MemoryRouter>{props.children}</MemoryRouter>
  </ThemeMock>
);

export default RouterMock;
