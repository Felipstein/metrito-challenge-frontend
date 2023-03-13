import styled, { css } from 'styled-components';

import { TagStatusColor } from './types';

const colors: Record<TagStatusColor, any> = {
  cyan: css`
    background-color: ${({ theme }) => theme.anatomy.colors.cyan.background};
    color: ${({ theme }) => theme.anatomy.colors.cyan.text};
  `,

  green: css`
    background-color: ${({ theme }) => theme.anatomy.colors.green.background};
    color: ${({ theme }) => theme.anatomy.colors.green.text};
  `,

  red: css`
    background-color: ${({ theme }) => theme.anatomy.colors.danger.background};
    color: ${({ theme }) => theme.anatomy.colors.danger.text};
  `,
};

export const Container = styled.span<{ color: TagStatusColor, small: boolean }>`
  display: inline-block;

  padding: ${({ small }) => small ? '0.2rem 0.4rem' : '0.4rem 0.6rem'};

  border-radius: 16px;

  font-size: ${({ theme, small }) => small ? theme.typograph.size.xsm : theme.typograph.size.sm};

  ${({ color }) => colors[color] || colors.green}

  font-weight: 700;
`;
