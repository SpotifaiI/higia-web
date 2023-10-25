'use client';


import styled from "styled-components";
import { Calendar } from "react-feather";

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
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchField = styled.input`
  background-color: var(--color-white);
  border: 0;
  border-radius: 1rem;
  height: 4.8rem;
  padding: 0 1.6rem;
  font-size: 1rem;
`;

export const SearchFieldIcon = styled(Calendar)`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const ActionButton = styled.button`
  border: 0;
  border-radius: .8rem;
  height: 4.8rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-lighter);
  background: linear-gradient(to right, #37FC6E, #5A81FA);
  transition: .3s all;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  &:hover {
    opacity: .8;
  }
`;