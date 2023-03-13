import React from 'react';

import { useCurrentTheme } from '../../contexts/CurrentThemeContext';
import { MoonIcon } from '../../icons/MoonIcon';
import { LightIcon } from '../../icons/LightIcon';

import * as S from './styles';

export const ToggleThemeButton: React.FC = () => {
  const { currentTheme, toggleTheme } = useCurrentTheme();

  return (
    <S.ButtonStyled
      type='button'
      onClick={toggleTheme}
    >
      Mudar Tema
      {currentTheme === 'light' && <MoonIcon />}
      {currentTheme === 'dark' && <LightIcon />}
    </S.ButtonStyled>
  );
};
