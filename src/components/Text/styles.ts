import styled, { css } from 'styled-components';
import { Slot } from '@radix-ui/react-slot';

import { TextProps } from './types';

const BaseStyles = css<TextProps>`
  font-size: ${({ theme, size }) => theme.typograph.size[size || 'md']};
`;

export const SpanStyled = styled.span`
  ${BaseStyles}
`;

export const SlotStyled = styled(Slot)`
  ${BaseStyles}
`;
