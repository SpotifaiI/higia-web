'use client';

import styled from "styled-components";

import { sizes } from "@/global/sizes";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  @media (min-width: ${sizes.tablet}) {
    display: grid;
    grid-template-areas:
      "a a b b"
      "c c c c";
  }
`;

export const SearchFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  grid-area: a;
`;

export const SearchFieldLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-darker);
  line-height: 1.6rem;
`;

export const SearchFieldGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SearchField = styled.input`
  background-color: var(--color-white);
  border: 0;
  border-radius: 1rem;
  height: 4.8rem;
  padding: 0 4.8rem 0 1.6rem;
  color: var(--color-dark);
  font-size: 1rem;
`;

export const SearchFieldIconContainer = styled.span`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-darker);
`;