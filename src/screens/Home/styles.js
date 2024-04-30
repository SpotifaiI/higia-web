import styled from 'styled-components';

import { sizes } from '../../global/sizes.js';
import { css } from '../../global/styles.js';
import { colors } from '../../global/theme.js';

export const StatisticContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: .8rem;
  border-radius: .8rem;
  scrollbar-width: thin;

  @media (min-width: ${sizes.laptop}){
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DataList = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  max-height: 100vh;
`;

export const MapBox = styled.aside`
  width: 100%;
  height: 80vh
`;

export const TaskStatsContainer = styled.div`
  height: 7.2rem;
  width: 100%;
  background: ${css.linearGradient};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
`;

export const TaskStatsNumber = styled.span`
  font-size: 3.2rem;
  line-height: 4.8rem;
  font-weight: 700;
  color: ${colors.white};
`;

export const TaskStatsDescription = styled.span`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 500;
  color: ${colors.white};
`;

export const PendingTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: .8rem 0;
`;

export const PendingTasksSubtitle = styled.h4`
  font-size: 1.2rem;
  line-height: 2.4rem;
`;

export const PendingTasksList =  styled.div``;

export const PendingTasksDate = styled.h6``;

export const PendingTaskItem = styled.div``;

export const PendingTaskItemTitle = styled.span``;

export const PendingTaskItemTimeContainer = styled.div``;

export const PendingTaskItemTimeIcon = styled.span``;

export const PendingTaskItemTimeText = styled.span``;