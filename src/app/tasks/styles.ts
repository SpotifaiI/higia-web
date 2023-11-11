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
  margin-top: 4.8rem;
  gap: 3.2rem;

  @media (min-width: ${sizes.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${sizes.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;