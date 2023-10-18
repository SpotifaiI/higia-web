'use client';

import styled from "styled-components";
import Image from "next/image";

import { sizes } from "@/global/sizes";

export const Navigation = styled.nav`
  background-color: var(--color-white);
  height: 6.4rem;
  width: calc(100% - 1.6rem);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: .8rem;
  display: flex;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  align-items: center;
  justify-content: center;
  margin: 0 .8rem .8rem .8rem;

  @media (min-width: ${sizes.tablet}) {
    justify-content: space-between;
  }

  @media (min-width: ${sizes.laptop}) {
    flex-direction: column;
    height: calc(100% - 1.6rem);
    margin: .8rem 0 .8rem .8rem;
    width: 6.4rem;
    right: auto;
    top: 0;
    left: 0;
    bottom: 0;
  }
`;

export const LogoImage = styled(Image)`
  margin-left: .8rem;
  margin-top: 0;

  @media (min-width: ${sizes.laptop}) {
    margin-left: 0;
    margin-top: .8rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.2rem;
  width: 100%;
  gap: .8rem;
  max-width: 24rem;

  @media (min-width: ${sizes.laptop}) {
    flex-direction: column;
    max-height: 24rem;
    height: 100%;
    width: 3.2rem;
  }
`;

export const SpacingContainer = styled.span`
  height: 4.8rem;
  width: 4.8rem;
  display: none;

  @media (min-width: ${sizes.tablet}) {
    display: flex;
    align-items: center;
    justify-items: center;
  }
`;

export const ImageContainer = styled(SpacingContainer)`
  object-fit: cover;
  position: relative;

  @media (min-width: ${sizes.tablet}) {
    display: flex;
    align-items: center;
    justify-items: center;
    margin-left: 0;
  }
`;