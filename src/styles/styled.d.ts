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

    shadows: {
      default: string;
      inputFocused: string;
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

  }

}
