'use client';

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  background-color: var(--color-lighter);
`;

export const Navigation = styled.nav`
  background-color: var(--color-white);
  height: 6.4rem;
  border-radius: .8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
`;

export const Content = styled.main`
  background-color: var(--color-white);
  flex: 1;
  border-radius: .8rem;
`;

export const SpacingContainer = styled.span`
  height: 4.8rem;
  width: 4.8rem;
  display: none;
`;

export const ImageContainer = styled(SpacingContainer)`
  object-fit: cover;
  position: relative;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.2rem;
  width: 100%;
  gap: .8rem;
`;

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
    color: var(--color-main-1);
  }
`;