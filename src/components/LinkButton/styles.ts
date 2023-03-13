import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.8rem 1.2rem;

  text-decoration: none;
  line-height: 0;

  color: ${({ theme }) => theme.colors.gray[50]};
  font-weight: 600;

  transition: color ${({ theme }) => theme.animations.sh} ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
