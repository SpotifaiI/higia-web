import styled from 'styled-components';

import { colors } from '../../global/theme.js';
import { Link } from 'react-router-dom';

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
  gap: .8rem;
  color: ${colors.dark};
`;

export const TaskListDataExtraInfo = styled.span`
  font-size: 1rem;
  line-height: 1.6rem;
`;

export const TaskUserContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: .4rem;
`;

export const TaskPriorityIndicator =  styled.span`
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
`;

export const TaskHighPriorityIndicator = styled(TaskPriorityIndicator)`
  background-color: ${colors.p1};
`;

export const TaskMediumPriorityIndicator = styled(TaskPriorityIndicator)`
  background-color: ${colors.p2};
`;

export const TaskLowPriorityIndicator = styled(TaskPriorityIndicator)`
  background-color: ${colors.p3};
`;