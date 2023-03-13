import React from 'react';

import { TagStatusProps } from './types';
import * as S from './styles';

export const TagStatus: React.FC<TagStatusProps> = ({ text, color, small = false }) => {

  return (
    <S.Container color={color} small={small}>
      {text}
    </S.Container>
  );
};
