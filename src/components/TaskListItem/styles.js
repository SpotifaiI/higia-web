import styled from 'styled-components';

import { colors } from '../../global/theme.js';

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

export const TaskListDataInfoTitle = styled.a`
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