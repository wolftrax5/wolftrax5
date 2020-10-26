import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { AppRoutes } from './containers/AppRoutes';
import { useTheme } from './contexts/theme-context';

const App = () => {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyle theme={theme} />
      <AppRoutes />
    </>
  );
};

export default App;
