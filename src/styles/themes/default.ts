import { DefaultTheme } from 'styled-components';

// O foco é apenas fornecer os detalhes padrões do design, e não o completo, por isso do ts-ignore.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default {

  typograph: {
    fontFamily: 'Nunito, sans-serif',

    size: {
      lg: '1.8rem',
      md: '1.6rem',
      sm: '1.4rem',
      xsm: '1.2rem',
    },

    heading: {
      h1: '2.8rem',
      h2: '2.4rem',
      h3: '2.0rem',
    },
  },

  animations: {
    sh: '0.125s',
    md: '0.2s',
    lg: '0.3s',
  },

  colors: {
    gray: {
      '25': '#f5f5f5',
      '50': '#f8f8f8',
      '100': '#d9d9d9',
      '200': '#bfbfbf',
      '400': '#8c8c8c',
      '600': '#495057',
    },

    blue: {
      '25': '#f8faff',
      '300': '#5a83f1',
      '500': '#1e55eb',
      '600': '#1346d3',
      '700': '#0b37a5',
    },

    softblue: {
      '100': '#eff2f7',
      '200': '#cfd6e0',
      '300': '#afbecd',
      '500': '#3a5579',
      '550': '#293c57',
      '600': '#1d2d42',
      '700': '#162437',
      '800': '#121e2d',
      '900': '#0e1824',
    },

    redorange: {
      '50': '#ffe8e1',
      '500': '#f56e50',
    },

    green: {
      '50': '#deffed',
      '600': '#109e4c',
    },

    cyan: {
      '50': '#d9fdff',
      '600': '#0090ab'
    },
  },

} as DefaultTheme;
