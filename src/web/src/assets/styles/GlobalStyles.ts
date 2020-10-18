import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-color-primary: #FFF;
    --background-color: #ebf2f5;
    --button-enter-color-primary: #ffd666;
    --button-enter-color-hover: #96FEFF;
    --button-create-orphanage-color: #15c3d6;
    --button-create-orphanage-color-hover: #17d6EB;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--font-color-primary);
    background: var(--background-color);
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }
`;
