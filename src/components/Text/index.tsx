import React from 'react';

import { TextProps } from './types';
import * as S from './styles';

export const Text: React.FC<TextProps> = ({ size = 'md', asChild = false, children, ...props }) => {
  //A lógica do Slot do Radix é transformar o componente em seu filho caso a opção asChild seja true.
  const Comp = asChild ? S.SlotStyled : S.SpanStyled;

  return (
    <Comp size={size} {...props}>
      {children}
    </Comp>
  );
};
