import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Routes } from './Routes';

import GlobalStyles from './styles/global';
import light from './styles/themes/light';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
