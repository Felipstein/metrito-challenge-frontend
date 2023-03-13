import { Slot } from '@radix-ui/react-slot';
import styled, { css } from 'styled-components';

export const BaseStyles = css`
  background-color: ${({ theme }) => theme.anatomy.colors.button.primary.default.background};
  color: ${({ theme }) => theme.anatomy.colors.button.primary.default.text};

  text-decoration: none;
  font-weight: 500;

  font-size: ${({ theme }) => theme.typograph.size.md};

  outline: none;
  border: none;

  border-radius: 8px;

  padding: 0.8rem 1.2rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.anatomy.colors.button.primary.hovered.background};
  }

  &:active {
    background-color: ${({ theme }) => theme.anatomy.colors.button.primary.actived.background};
  }
`;

export const ButtonStyled = styled.button`
  ${BaseStyles}
`;

export const SlotStyled = styled(Slot)`
  ${BaseStyles}
`;
