'use client';

import Link from "next/link";
import styled from "styled-components";

import { NavigationButtonProps } from './index';

const activeButtonStyles = `
  color: var(--color-white);
  background: linear-gradient(to right bottom, var(--color-main-1) 0%, var(--color-main-2) 100%);
`;
const standardButtonStyles = `
  color: var(--color-dark);
`;

export const NavigationButton = styled(Link)<NavigationButtonProps>`
  width: 100%;
  height: 100%;
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