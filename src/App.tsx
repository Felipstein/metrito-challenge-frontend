import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CurrentThemeProvider } from './contexts/CurrentThemeContext';
import { Routes } from './Routes';

import GlobalStyles from './styles/global';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CurrentThemeProvider>
        <GlobalStyles />
        <Layout>
          <Routes />
        </Layout>
      </CurrentThemeProvider>
    </BrowserRouter>
  );
};
