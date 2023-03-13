import React, { createContext, ReactNode, useContext, useState } from 'react';

import { Theme } from '../styles/themes';

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
    <CurrentThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </CurrentThemeContext.Provider>
  );
};

export const useCurrentTheme = useContext(CurrentThemeContext);
