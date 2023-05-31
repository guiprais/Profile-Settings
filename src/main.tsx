import '@fontsource/heebo/400.css';
import '@fontsource/heebo/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from 'src/styles/global.ts';
import defaultTheme from 'src/styles/themes/default.ts';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
