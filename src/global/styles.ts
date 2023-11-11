'use client';

import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./theme";

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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
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

export const css = {
  linearGradient:
    `linear-gradient(to right bottom, ${colors.main1}, ${colors.main2})`
};

export const components = {
  ActionButton: styled.button`
    border: 0;
    border-radius: .8rem;
    height: 4rem;
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 700;
    transition: .3s;
    padding: 0 1.6rem;
    gap: .8rem;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  `
};