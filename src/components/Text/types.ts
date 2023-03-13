import { ReactNode } from 'react';

export interface TextProps {
  size?: 'lg' | 'md' | 'sm' | 'xsm';
  asChild?: boolean;
  children: ReactNode;
}
