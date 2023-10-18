'use client';

import styled from "styled-components";
import Link from "next/link";

export const NavigationButton = styled(Link)`
  color: var(--color-dark);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  border-radius: 50%;

  &:hover {
    color: var(--color-white);
    background: linear-gradient(to right, var(--color-main-1) 0%, var(--color-main-2) 100%);
  }
`;