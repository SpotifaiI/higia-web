'use client';

import styled from "styled-components";

import { sizes } from "@/global/sizes";


export const StatisticContainerList = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: .8rem;
  border-radius: .8rem;
  scrollbar-width: thin;

  @media (min-width: ${sizes.laptop}){
  grid-template-columns: repeat(2, 1fr);
}

`;

export const StatisticContainerListMin = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: .8rem;
  border-radius: .8rem;
  scrollbar-width: thin;

  @media (min-width: ${sizes.tablet}){
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: ${sizes.laptop}){
  grid-template-columns: repeat(3, 1fr);
}
`;

export const StatisticListBox = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  scrollbar-width: thin;
`;
