import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: auto;
  }

  :root {
   --primary-yellow: #FFA14A;
   --primary-purple: #A8A0FF;
   --primary-blue: #90B9F6;
   --primary-green: #32CBC2;
   --primary-pink: #FD92DF;
   --primary-red: #FF9797;
   --secondary-yellow: #834710;
   --secondary-purple: #5048A3;
   --secondary-blue: #1C53A5;
   --secondary-green: #206A66;
   --secondary-pink: #8F3275;
   --secondary-red: #9B3030;
 }
`
 export default GlobalStyle;
