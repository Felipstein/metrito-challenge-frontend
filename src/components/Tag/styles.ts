import styled from 'styled-components';

export const Container = styled.span`
  display: inline-block;

  padding: 0.4rem 0.6rem;
  border-radius: 16px;

  font-size: ${({ theme }) => theme.typograph.size.sm};

  background-color: ${({ theme }) => theme.anatomy.colors.tag.background};
  color: ${({ theme }) => theme.anatomy.colors.tag.text};
  font-weight: 700;
`;
