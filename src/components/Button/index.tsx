import React from 'react';

import { ButtonProps } from './types';
import * as S from './styles';

export const Button: React.FC<ButtonProps> = ({ asChild = false, children, ...props }) => {
  const Comp = asChild ? S.SlotStyled : S.ButtonStyled;

  return (
    <Comp {...props}>
      {children}
    </Comp>
  );
};
