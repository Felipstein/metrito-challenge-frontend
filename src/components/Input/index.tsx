import React from 'react';

import { InputProps } from './types';
import * as S from './styles';

export const Input: React.FC<InputProps> = ({ label, small = false, ...props }) => {
  return (
    <S.InputContainer>
      {label && (
        <S.InputLabel small={small}>
          {label}
        </S.InputLabel>
      )}
      <S.InputStyled {...props} />
    </S.InputContainer>
  );
};
