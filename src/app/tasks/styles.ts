'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { sizes } from '@/global/sizes';
import { colors } from '@/global/theme';

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

export const TaskListRow = styled.div`
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:first-child) {
    border-top: .2rem solid ${colors.light};
  }
`;

export const TaskListDataInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`;

export const TaskListDataInfoTitle = styled(Link)`
  text-decoration: underline;
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 700;
  color: ${colors.main2};
`;

export const TaskListDataInfoDistance = styled.span`
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 700;
  color: ${colors.dark};
`;

export const TaskListDataExtraContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
  color: ${colors.dark};
`;

export const TaskListDataExtraInfo = styled.span`
  font-size: 1rem;
  line-height: 1.6rem;
`;