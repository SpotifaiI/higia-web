'use client';

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-main-1: #37FC6E;
    --color-main-light-1: #ACF2C0;
    --color-main-2: #5A81FA;
    --color-main-light-2: #ACC4F8;
    --color-darker: #333333;
    --color-dark: #787D82;
    --color-light: #E6F3F6;
    --color-lighter: #F5F5F5;
    --color-white: #FBFBFB;
    --color-black: #101010;
    --color-danger: #DC3545;
    --color-gradient-main: linear-gradient(to right, #37FC6E, #5A81FA);
    --color-gradient-main-light: linear-gradient(to right, #ACF2C0, #ACC4F8);
    --color-gradient-disabled: linear-gradient(to right, #787D82, #E6F3F6);
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-size: 16px;
  }

  input, button, textarea {
    font-family: var(--font-poppins);
  }

  a {
    text-decoration: none;
  }
`;