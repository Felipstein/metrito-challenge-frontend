import { DefaultTheme } from 'styled-components';
import _default from './default';

const { blue, cyan, gray, green, redorange, softblue } = _default.colors;

// Fornece os detalhes do tema dark.
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

      background: softblue[900],

      text: gray[50],

      danger: {
        text: redorange[50],
        background: redorange[500],
      },

      green: {
        text: green[50],
        background: green[600],
      },

      cyan: {
        text: cyan[50],
        background: cyan[600],
      },

      tag: {
        text: gray[400],
        background: softblue[600],
      },

      scrollbar: softblue[600],

      header: {
        title: gray[50],
        topHeader: softblue[900],
        navBar: blue[600],
      },

      footer: {
        text: gray[200],
        background: softblue[800],
      },

      homePage: {
        blueTexts: blue[300],
        contentBackground: softblue[800],
        contentHeaderBackground: softblue[900],
        hoveredBackgroundItem: softblue[700],
        lightTexts: gray[200],
        mainTexts: gray[200],
        darkTexts: gray[50],
        itemsSeparator: gray[600],
      },

      orderInfoPage: {
        contentBackground: softblue[800],
        panelBackground: softblue[900],
        blockInfoBackground: softblue[700],
        ligherTexts: softblue[550],
        lightTexts: softblue[500],
        mainTexts: softblue[300],
      },

      input: {
        label: gray[100],
        background: softblue[800],
        inputBorder: softblue[550],
        inputBorderFocused: softblue[500],
        placeholder: gray[400],
        danger: redorange[500],
        text: gray[50],
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
            text: gray[50],
            background: softblue[500],
          },
          hovered: {
            text: gray[50],
            background: softblue[550],
          },
          actived: {
            text: gray[50],
            background: softblue[600],
          },
        },

        terciary: {
          default: {
            text: gray[50],
          },

          hovered: {
            text: blue[300],
          },
        },
      },
    },
  }

} as DefaultTheme;
