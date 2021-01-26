import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

  body, input, button {
    background-color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
  }
`;
