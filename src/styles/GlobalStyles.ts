import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000000;    
    --white: #ffffff;
    --dark-gray: #333333;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;     
  }
  html, body, #root {  
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;    
    background: url('./images/wall-texture.jpeg') center center;    
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu, sans serif;
  }
`;
