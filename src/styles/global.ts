import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #000000;
    --color-primary: #27AE60;
    --color-secondary: #EB5757;
    --color-gray600:#333333;
    --color-gray300:#828282;
    --color-gray100:#E0E0E0;
    --color-gray0:#F5F5F5;
    --color-success: #3FE864;
    --color-negative: #E83F5B;
    --color-warning: #FFCD07;
    
    --weight1: 700;
    --weight2: 600;
    --weight3: 500;
    --weight4: 400;

    --font-size0: 26px;
    --font-size1: 24px;
    --font-size2: 22px;
    --font-size3: 20px;
    --font-size4: 18px;
    --font-size5: 16px;
    --font-size6: 14px;
    --font-size7: 12px;
    --font-size8: 10px;
    --font-size9: 9px;

    --radius1: 16px;
    --radius2: 8px;
    --radius3: 4px;
  }  
  * {
    margin:0;
    padding: 0;
    outline:0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body,html{
    width: 100%;
    min-height: 100vh;
  }

  a{
    color: unset;
    text-decoration: none;
  }

  body {
    background-color: var(--color-gray400);
  }
  
  button {
    cursor: pointer;
  }
`;
