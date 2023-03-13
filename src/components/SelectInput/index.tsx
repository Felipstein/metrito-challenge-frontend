import React from 'react';

import { SelectInputProps } from './types';
import * as S from './styles';

export const SelectInput: React.FC<SelectInputProps> = ({ label, children }) => {
  return (
    <S.SelectContainer>
      {label && (
        <S.SelectLabel>
          {label}
        </S.SelectLabel>
      )}
      <S.SelectStyled>
        {children}
      </S.SelectStyled>
    </S.SelectContainer>
  );
};
