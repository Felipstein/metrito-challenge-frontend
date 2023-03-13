import React from 'react';
import { MoonIcon } from '../../icons/MoonIcon';

import * as S from './styles';

export const ToggleThemeButton: React.FC = () => {

  return (
    <S.ButtonStyled
      type='button'
    >
      Mudar Tema
      <MoonIcon size={20} />
    </S.ButtonStyled>
  );
};
