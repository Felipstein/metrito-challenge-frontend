import { HTMLAttributes, ReactNode } from 'react';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  size?: 'lg' | 'md' | 'sm' | 'xsm';
  asChild?: boolean;
  children: ReactNode;
}
