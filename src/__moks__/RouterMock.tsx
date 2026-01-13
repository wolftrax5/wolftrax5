import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ThemeMock from './ThemeMock';

interface RouterMockProps {
  children: React.ReactNode;
}

const RouterMock: React.FC<RouterMockProps> = (props) => (
  <ThemeMock>
    <MemoryRouter>{props.children}</MemoryRouter>
  </ThemeMock>
);

export default RouterMock;
