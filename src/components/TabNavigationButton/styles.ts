'use client';

import Link from "next/link";
import styled from "styled-components";

import { css } from "@/global/styles";
import { NavigationButtonProps } from './index';

const activeButtonStyles = `
  color: var(--color-white);
  background: ${css.linearGradient};
`;
const standardButtonStyles = `
  color: var(--color-dark);
`;

export const NavigationButton = styled(Link)<NavigationButtonProps>`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  border-radius: 50%;
  ${
    ({ isSelected }) => isSelected
    ? activeButtonStyles
    : standardButtonStyles
  }

  &:hover {
    ${activeButtonStyles}
  }
`;