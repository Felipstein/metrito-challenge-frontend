import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme, themes } from '../styles/themes';
import light from '../styles/themes/light';

export interface CurrentThemeContextProps {
  currentTheme:  Theme;
  toggleTheme: () => void;
}

// Ignorado apenas por ser a primeira inicialização.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const CurrentThemeContext = createContext<CurrentThemeContextProps>();

export interface CurrentThemeProviderProps {
  children: ReactNode;
}

export const CurrentThemeProvider: React.FC<CurrentThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  /**
   * Alterna entre os temas light e dark.
   */
  function toggleTheme() {
    setCurrentTheme(prevState => prevState === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={themes[currentTheme] || light}>
      <CurrentThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        {children}
      </CurrentThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useCurrentTheme = () => useContext(CurrentThemeContext);
