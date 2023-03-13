import React from 'react';

import { LinkButtonProps } from './types';
import * as S from './styles';

export const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {

  return (
    <S.LinkStyled to={to} target="_blank">
      {children}
    </S.LinkStyled>
  );
};
