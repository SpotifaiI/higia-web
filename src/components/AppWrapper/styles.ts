'use client';

import styled from "styled-components";

import { sizes } from "@/global/sizes";
import { css } from "@/global/styles";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-lighter);
`;

export const Content = styled.main`
  padding: 1.6rem 1.6rem 8.8rem 1.6rem;
  height: 100%;

  @media (min-width: ${sizes.laptop}) {
    padding: 1.6rem 1.6rem 1.6rem 8.8rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  line-height: 3rem;
  margin-left: 1.6rem;
  color: var(--color-darker);
`;

export const GradientSpan = styled.span`
  height: 100%;
  width: .4rem;
  position: absolute;
  background: ${css.linearGradient};
`;

export const MainTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  gap: 1.6rem;

  @media (min-width: ${sizes.tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const TitleTextContainer = styled.div`
  position: relative;
`;