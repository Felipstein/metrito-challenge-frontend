import React from 'react';
import { ToggleThemeButton } from '../ToggleThemeButton';

import * as S from './styles';

export const Header: React.FC = () => {

  return (
    <S.HeaderContainer>
      <div className="top-header">
        <h1>Analise de Dados</h1>

        <ToggleThemeButton />
      </div>

      <S.NavBar>
        <a href="">A</a>
        <a href="">B</a>
        <a href="">C</a>
        <a href="">D</a>
      </S.NavBar>
    </S.HeaderContainer>
  );
};
