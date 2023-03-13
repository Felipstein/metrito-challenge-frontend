import React from 'react';

import { TagStatusProps } from './types';
import * as S from './styles';

export const TagStatus: React.FC<TagStatusProps> = ({ text, color }) => {

  return (
    <S.Container color={color}>
      {text}
    </S.Container>
  );
};
