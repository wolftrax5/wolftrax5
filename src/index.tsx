import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/theme-context';

import * as serviceWorker from './serviceWorker';

// Suppress MetaMask errors in console
const originalError = console.error;
console.error = (...args: unknown[]) => {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('MetaMask')) {
    return; // Suppress MetaMask errors
  }
  originalError.apply(console, args);
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
