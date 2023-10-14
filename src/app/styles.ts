'use client';

import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 2.4rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  background-color: var(--color-lighter);
`;

export const Navigation = styled.nav`
  background-color: var(--color-white);
  flex: 2;
  border-radius: .8rem;
`;

export const Content = styled.main`
  background-color: var(--color-white);
  flex: 10;
  border-radius: .8rem;
`;