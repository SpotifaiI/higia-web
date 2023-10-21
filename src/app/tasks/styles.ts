'use client';


import styled from "styled-components";
import { Calendar } from "react-feather";


export const StatisticContainerList = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  border-radius: .8rem;
  scrollbar-width: thin;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchFieldLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const SearchFieldGroup = styled.div`
  height: 4.8rem;
  position: relative;
  max-width: 100%;
`;

export const SearchField = styled.input`
  width: 100%;
  height: 100%;
  background-color: var(--color-white);
  border: 0;
  border-radius: 1rem;
  font-size: 1rem;
`;

export const SearchFieldIcon = styled(Calendar)`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
`;