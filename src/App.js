import React from 'react';
import { GlobalStyle, CardDiv } from './styles/GlobalStyles';
import { useTheme } from './contexts/theme-context';

const App = () => {
  let { theme, toggleTheme } = useTheme();
  return (
    <>
      <GlobalStyle theme={theme} />
      <CardDiv>
        <h1>Create React App + Go API</h1>
      </CardDiv>
      <button onClick={toggleTheme}>Theme {theme}</button>
    </>
  );
};

export default App;
