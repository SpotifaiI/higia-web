import styled from 'styled-components';

import { colors } from '../../global/theme.js';
import { sizes } from '../../global/sizes.js';
import { components } from '../../global/styles.js';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  background: ${colors.light};
  padding: 1.6rem;
  border-radius: 1.6rem;

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
  margin-top: 2.4rem;
  gap: 3.2rem;

  @media (min-width: ${sizes.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${sizes.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TaskListTools = components.ActionWrapper;


export const TaskTable = styled.table``;

export const TaskTableHeader = styled.thead``;

export const TaskTableBody = styled.tbody``;

export const TaskTableRow = styled.tr``;

export const TaskTableCell = styled.td``;