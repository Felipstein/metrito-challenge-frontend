import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const InputLabel = styled.label<{ small: boolean }>`
  color: ${({ theme }) => theme.anatomy.colors.input.label};
  font-weight: 600;

  font-size: ${({ theme, small }) => small ? theme.typograph.size.xsm : theme.typograph.size.md};
`;

export const InputStyled = styled.input`
  color: ${({ theme }) => theme.anatomy.colors.input.text};
  background-color: ${({ theme }) => theme.anatomy.colors.input.background};
  border: 1.5px solid ${({ theme }) => theme.anatomy.colors.input.inputBorder};
  border-radius: 8px;

  font-weight: 500;
  padding: 0.8rem 1.2rem;

  outline: none;

  transition: border-color ${({ theme }) => theme.animations.sh} ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.anatomy.colors.input.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.anatomy.colors.input.inputBorderFocused};
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;
