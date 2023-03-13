import styled from 'styled-components';
import { TextProps } from './types';

export const SpanStyled = styled.span<TextProps>`
  font-size: ${({ theme, size }) => theme.typograph.size[size || 'md']};
`;
