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

export const PendingTasksList =  styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: .8rem;

  @media (min-width: ${sizes.tablet}){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${sizes.laptop}){
    grid-template-columns: 1fr;
  }

  @media (min-width: ${sizes.laptopL}){
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PendingTasksListItem = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PendingTasksDate = styled.h6`
  font-size: 1rem;
  line-height: 3.2rem;
  font-weight: 500;
  color: ${colors.dark};
`;

export const PendingTaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .8rem 1.2rem;
  min-height: 4rem;
  background-color: ${colors.white};
  border-radius: .8rem;
  cursor: pointer;
  transition: .3s;

  &:hover {
    opacity: .8;
  }

  & + & {
    margin-top: .8rem;
  }
`;

export const PendingTasksItemButtonContainer = styled.div``;

export const PendingTaskItemButton = styled.button``;

export const PendingTaskItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PendingTaskItemDistance = styled.span`
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 500;
  color: ${colors.dark};
`;

export const PendingTaskItemTitle = styled.span`
  font-size: 1.2rem;
  line-height: 2.4rem;
  font-weight: 700;
  color: ${colors.darker};
`;

export const PendingTaskItemTimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
  height: 100%;
`;

export const PendingTaskItemTimeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${colors.dark};
`;

export const PendingTaskItemTimeText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .8rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: ${colors.dark};
`;