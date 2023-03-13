import { ReactNode } from 'react';

export interface TextProps {
  size?: 'lg' | 'md' | 'sm' | 'xsm';
  children: ReactNode;
}
