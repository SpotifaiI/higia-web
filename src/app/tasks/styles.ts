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

export const TaskListContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const TaskListHeader = styled.header`
  display: flex;
  gap: .4rem;
  align-items: center;
  margin-bottom: .8rem;
`;

export const TaskListTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
`;

export const TaskListTable = styled.section``;