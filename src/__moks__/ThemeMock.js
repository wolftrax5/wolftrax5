import React from 'react';
import { ThemeProvider } from '../contexts/theme-context';

const ThemeMock = (props) => {
  return <ThemeProvider>{props.children}</ThemeProvider>;
};

export default ThemeMock;
