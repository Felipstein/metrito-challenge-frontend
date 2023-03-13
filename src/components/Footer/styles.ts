import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.anatomy.colors.footer.text};
  background-color: ${({ theme }) => theme.anatomy.colors.footer.background};

  font-weight: 600;

  padding: 2rem;
`;
