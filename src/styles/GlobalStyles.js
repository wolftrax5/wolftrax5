import sytled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --color-darkgray: #181818;
    --color-gray: #252627;
    --color-green: #67e813;
    --color-darkgreen: #1dbf5e;
    --shadow: 0 4px 8px ${(props) =>
      props.theme === 'dark' ? 'var(--color-green)' : 'var(--color-darkgreen)'};
    --main-bg-color: ${(props) =>
      props.theme === 'dark' ? '#1e1f20' : '#ffffff'};
    --main-fnt-color: ${(props) =>
      props.theme === 'dark' ? '#ffffff' : '#1e1f20'};
    --side-bar-width: 75px;
    html {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        color: var(--black);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    
      }
      *, *::before, *::after {
        box-sizing: inherit;
      }
      body,
      div,
      header,
      section,
      article,
      aside,
      nav,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      ul {
        list-style: none;
      }
      body{
        background: var(--main-bg-color);
        color: var(--main-fnt-color);
      }
      button {
        border: 0;
        outline: 0;
        cursor: pointer;
      }
      a {
        text-decoration: none;
      }
    
  }`;

export const CenterDiv = sytled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  align-items: center;
  justify-content: center;
`;

export const CardDiv = sytled.div`
  box-shadow: var(--shadow);
  border-radius: 8px;
  padding: 30px;
`;
