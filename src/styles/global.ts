import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.gradient.background};
    -webkit-font-smoothing: antialiased;
    font-family: "Heebo", sans-serif;
  }

  body, input, textarea, button {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
