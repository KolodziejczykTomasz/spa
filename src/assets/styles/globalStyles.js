import { createGlobalStyle } from "styled-components"

import '../../fonts/fonts.css';

const GlobalStyle = createGlobalStyle`


  html {
    box-sizing: border-box;          
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 80px 65px 0;
    font-family: 'Lovelo Black'; 
  }

  button {
    padding: 0;
    cursor: pointer;   
      }

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
