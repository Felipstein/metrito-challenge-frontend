import { DefaultTheme } from 'styled-components';

export default {

  typograph: {
    fontFamily: 'Nunito, sans-serif',

    size: {
      lg: '1.6rem',
      md: '1.4rem',
      sm: '1.2rem',
      xsm: '1.0rem',
    },

    heading: {
      h1: '2.8rem',
      h2: '2.4rem',
      h3: '2.0rem',
    },
  },

  shadows: {
    default: '2px 2px 16px rgba(0, 0, 0, 0.5)',
    inputFocused: '0 0 4px #F56E50',
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
