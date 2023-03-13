import React from 'react';

import { TagProps } from './types';
import * as S from './styles';

export const Tag: React.FC<TagProps> = ({ text }) => {

  return (
    <S.Container>
      {text}
    </S.Container>
  );
};
