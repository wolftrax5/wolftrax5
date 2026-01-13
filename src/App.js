import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { AppRoutes } from './containers/AppRoutes';
import { useTheme } from './contexts/theme-context';
import { SpeedInsights } from '@vercel/speed-insights/react';
const App = () => {
  const { theme } = useTheme();
  return (
    <>
      <SpeedInsights />
      <GlobalStyle theme={theme} />
      <AppRoutes />
    </>
  );
};

export default App;
