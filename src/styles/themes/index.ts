import { DefaultTheme } from 'styled-components';
import dark from './dark';
import light from './light';

export type Theme = 'dark' | 'light';

export const themes = {
  dark,
  light,
} as Record<Theme, DefaultTheme>;
