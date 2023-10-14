'use client';

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  input, button, textarea {
    font-family: var(--font-poppins);
  }
`;