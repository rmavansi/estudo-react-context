import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }

  body, input, button {
    font: 16px;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
