import 'styled-components';

declare module 'styled-components' {

  export interface DefaultTheme {

    typograph: {
      fontFamily: string;

      size: {
        lg: string;
        md: string;
        sm: string;
        xsm: string;
      };

      heading: {
        h1: string;
        h2: string;
        h3: string;
      };
    };

    colors: {
      gray: {
        25: string;
        50: string;
        100: string;
        200: string;
        400: string;
        600: string;
      };

      blue: {
        25: string;
        300: string;
        500: string;
        600: string;
        700: string;
      };

      softblue: {
        100: string;
        200: string;
        300: string;
        500: string;
        550: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };

      redorange: {
        50: string;
        500: string;
      };

      green: {
        50: string;
        600: string;
      };

      cyan: {
        50: string;
        600: string;
      };
    };

    animations: {
      sh: string;
      md: string;
      lg: string;
    };

    // Tokens relacionadas à anatomia do Design System. São valores que podem ser alterados na troca entre o tema Light e o Dark.
    anatomy: {
      disabledOpacity: string;

      shadows: {
        default: string;
        inputFocused: string;
      };

      colors: {
        primary: {
          lighter: string;
          light: string;
          main: string
          dark: string;
          darker: string;
        };

        danger: {
          text: string;
          background: string;
        };

        green: {
          text: string;
          background: string;
        };

        cyan: {
          text: string;
          background: string;
        };

        text: string;
        background: string;

        input: {
          label: string;
          inputBorder: string;
          inputBorderFocused: string;
          placeholder: string;
          background: string;
          text: string;
          danger: string;
        }

        scrollbar: string;

        header: {
          title: string;

          topHeader: string;
          navBar: string;
        };

        footer: {
          text: string;
          background: string;
        };

        tag: {
          text: string;
          background: string;
        };

        homePage: {
          contentBackground: string;
          contentHeaderBackground: string;
          lightTexts: string;
          mainTexts: string;
          darkTexts: string;
          blueTexts: string;
          hoveredBackgroundItem: string;
        }

        orderInfoPage: {
          ligherTexts: string;
          lightTexts: string;
          mainTexts: string;
          contentBackground: string;
          panelBackground: string;
          blockInfoBackground: string;
        };

        button: {
          primary: {
            default: {
              text: string;
              background: string;
            };
            hovered: {
              text: string;
              background: string;
            };
            actived: {
              text: string;
              background: string;
            };
          };

          secondary: {
            default: {
              text: string;
              background: string;
            };
            hovered: {
              text: string;
              background: string;
            };
            actived: {
              text: string;
              background: string;
            };
          };

          terciary: {
            default: {
              text: string;
            };
            hovered: {
              text: string;
            };
          };
        };
      };
    };
  }

}
