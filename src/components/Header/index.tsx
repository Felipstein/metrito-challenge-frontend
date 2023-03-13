import React from 'react';
import { LinkButton } from '../LinkButton';
import { ToggleThemeButton } from '../ToggleThemeButton';
import { Menu } from './Menu';

import * as S from './styles';

export const Header: React.FC = () => {

  return (
    <S.HeaderContainer>
      <div className="top-header">
        <h1>Analise de Dados</h1>

        <ToggleThemeButton />
      </div>

      <S.NavBar>
        <div className="links">
          <LinkButton to='https://github.com/Felipstein/metrito-challenge-backend'>
            Repositório API
          </LinkButton>

          <LinkButton to='https://github.com/Felipstein/metrito-challenge-frontend'>
            Repositório Web
          </LinkButton>

          <LinkButton to='https://www.figma.com/file/BjgpVRRLVhYN3tmw5sxux6/Metrito-Challenge-Layout?node-id=3%3A3306&t=Y2L8szlhTXWWbzJH-1'>
            Projeto no Figma
          </LinkButton>

          <LinkButton to='https://metrito-challenge-api.onrender.com/api-docs'>
            Doc da API
          </LinkButton>
        </div>

        <Menu>
          <S.MenuButton>
            Abrir menu
          </S.MenuButton>
        </Menu>
      </S.NavBar>
    </S.HeaderContainer>
  );
};
