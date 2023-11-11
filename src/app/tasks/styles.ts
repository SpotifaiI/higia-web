'use client';

import styled from 'styled-components';

import { sizes } from '@/global/sizes';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  @media (min-width: ${sizes.laptop}) {
    & > button {
      align-self: flex-end;
      height: 4rem;
    }
  }
`;

export const SearchFieldsGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  @media (min-width: ${sizes.tablet}) {
    flex-direction: row;

    & > * {
      flex: 1;
    }
  }
`;

export const TaskListGroup = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3.2rem;
`;