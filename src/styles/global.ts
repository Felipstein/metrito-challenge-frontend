import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    min-height: 100vh;

    @media screen and (max-width: 1024px) {
      font-size: 50%;
    }
  }

  body {
    font-family: ${({ theme }) => theme.typograph.fontFamily};
    font-size: ${({ theme }) => theme.typograph.size.md};

    background-color: ${({ theme }) => theme.anatomy.colors.background};
    color: ${({ theme }) => theme.anatomy.colors.text};

    min-height: 100%;
  }

  button, input {
    font-size: ${({ theme }) => theme.typograph.size.md};
    color: ${({ theme }) => theme.anatomy.colors.text};
  }

  h1 {
    font-size: ${({ theme }) => theme.typograph.heading.h1};
  }

  h2 {
    font-size: ${({ theme }) => theme.typograph.heading.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.typograph.heading.h3};
  }

`;
