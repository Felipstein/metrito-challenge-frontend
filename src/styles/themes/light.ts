import { DefaultTheme } from 'styled-components';
import _default from './default';

const { blue, cyan, gray, green, redorange, softblue } = _default.colors;

// Fornece os detalhes do tema light.
export default {
  ..._default,

  anatomy: {
    disabledOpacity: '0.5',

    shadows: {
      default: '2px 2px 16px rgba(0, 0, 0, 0.5)',
      inputFocused: '0 0 4px #F56E50',
    },

    colors: {
      primary: {
        lighter: blue[25],
        light: blue[300],
        main: blue[500],
        dark: blue[600],
        darker: blue[700],
      },

      background: gray[50],

      text: gray[600],

      danger: {
        text: redorange[500],
        background: redorange[50],
      },

      green: {
        text: green[600],
        background: green[50],
      },

      cyan: {
        text: cyan[600],
        background: cyan[50],
      },

      tag: {
        text: gray[600],
        background: gray[100],
      },

      scrollbar: gray[200],

      header: {
        title: blue[500],
        topHeader: gray[50],
        navBar: blue[600],
      },

      footer: {
        text: gray[600],
        background: gray[25],
      },

      homePage: {
        blueTexts: blue[600],
        contentBackground: '#fff',
        contentHeaderBackground: gray[50],
        hoveredBackgroundItem: blue[25],
        lightTexts: gray[200],
        mainTexts: gray[400],
        darkTexts: gray[600],
      },

      orderInfoPage: {
        contentBackground: '#fff',
        panelBackground: gray[25],
        blockInfoBackground: '#fff',
        ligherTexts: gray[200],
        lightTexts: gray[400],
        mainTexts: gray[600],
      },

      input: {
        label: gray[600],
        background: 'transparent',
        inputBorder: gray[200],
        placeholder: gray[200],
        danger: redorange[500],
        text: gray[600],
      },

      button: {
        primary: {
          default: {
            text: gray[50],
            background: blue[500],
          },
          hovered: {
            text: gray[50],
            background: blue[600],
          },
          actived: {
            text: gray[50],
            background: blue[700],
          },
        },

        secondary: {
          default: {
            text: gray[600],
            background: softblue[100],
          },
          hovered: {
            text: gray[600],
            background: softblue[200],
          },
          actived: {
            text: gray[50],
            background: softblue[300],
          },
        },

        terciary: {
          default: {
            text: gray[600],
          },

          hovered: {
            text: blue[600],
          },
        },
      },
    },
  }

} as DefaultTheme;
