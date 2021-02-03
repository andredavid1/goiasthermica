import { createGlobalStyle } from 'styled-components';

import RobotoFont from '../assets/fonts/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 67.5%;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoFont});
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #2c3e50;
  }

  main {
    background-color: #f4f4f4;
    margin: 0 auto;
    max-width: 97.2rem;
    min-height: calc(100vh - 10rem);
    width: 100%;
  }
`;
