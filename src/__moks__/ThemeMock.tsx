import React from 'react';
import { ThemeProvider } from '../contexts/theme-context';

interface ThemeMockProps {
  children: React.ReactNode;
}

const ThemeMock: React.FC<ThemeMockProps> = (props) => {
  return <ThemeProvider>{props.children}</ThemeProvider>;
};

export default ThemeMock;
