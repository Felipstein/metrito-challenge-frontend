import React from 'react';

import { TextProps } from './types';
import * as S from './styles';

export const Text: React.FC<TextProps> = ({ size = 'md', children, ...props }) => {
  return (
    <S.SpanStyled size={size} {...props}>
      {children}
    </S.SpanStyled>
  );
};
