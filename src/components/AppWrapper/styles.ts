'use client';

import styled from "styled-components";

import { sizes } from "@/global/sizes";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-lighter);
`;

export const Content = styled.main`
  padding: .4rem 1.6rem 8.8rem 1.6rem;
  height: 100%;

  @media (min-width: ${sizes.laptop}) {
    padding: 0 1.6rem .8rem 8.8rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  line-height: 3rem;
  color: var(--color-main-1);
  padding-left: .8rem;
  border-left: .2rem solid var(--color-main-2);
`;