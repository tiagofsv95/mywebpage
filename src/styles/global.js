import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
  min-width: 600px;
}

body {
  background-color: #24292e;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
  color: #fff;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}
`;
