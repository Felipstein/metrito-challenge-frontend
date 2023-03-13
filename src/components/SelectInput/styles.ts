import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const SelectLabel = styled.label`
  color: ${({ theme }) => theme.anatomy.colors.input.label};
  font-weight: 600;

  font-size: ${({ theme }) => theme.typograph.size.md};
`;

export const SelectStyled = styled.select`
  color: ${({ theme }) => theme.anatomy.colors.input.text};
  background-color: ${({ theme }) => theme.anatomy.colors.input.background};
  border: 1.5px solid ${({ theme }) => theme.anatomy.colors.input.inputBorder};
  border-radius: 8px;

  font-weight: 500;
  padding: 0.8rem 1.2rem;

  outline: none;

  transition: border-color ${({ theme }) => theme.animations.sh} ease-in-out;

  font-family: ${({ theme }) => theme.typograph.fontFamily};

  & option {
    background-color: ${({ theme }) => theme.anatomy.colors.input.background};
  }

  &::placeholder {
    color: ${({ theme }) => theme.anatomy.colors.input.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.anatomy.colors.input.inputBorderFocused};
  }
`;
