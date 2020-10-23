import React, { useState } from 'react';
import { GlobalStyle, CardDiv } from './styles/GlobalStyles';

const ThemeButton = ({ label, click }) => (
  <button onClick={click}> Theme {label} </button>
);
const App = () => {
  const [dark, setDatkmode] = useState(false);
  const toggleTheme = () => setDatkmode(!dark);
  return (
    <>
      <GlobalStyle theme={dark ? 'dark' : 'ligth'} />
      <CardDiv>
        <h1>Create React App + Go API</h1>
      </CardDiv>
      <ThemeButton label={dark ? 'dark' : 'ligth'} click={toggleTheme} />
    </>
  );
};

export default App;
