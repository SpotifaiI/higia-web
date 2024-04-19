import { Users } from 'react-feather';

import {
  TaskListDataExtraContainer,
  TaskListDataExtraInfo,
  TaskListDataInfoContainer,
  TaskListDataInfoDistance,
  TaskListDataInfoTitle,
  TaskListRow,
} from './styles.js';

/**
 * @param {{
 *    info: import('../../models/TaskListItem.js').TaskListItem
 * }} props
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
export function TaskListItem(props) {
  const { distanceInKm, person, title } = props.info;

  return (
    <TaskListRow>
      <TaskListDataInfoContainer>
        <TaskListDataInfoTitle href="/tasks">
          {title}
        </TaskListDataInfoTitle>
        <TaskListDataInfoDistance>
          {distanceInKm} km
        </TaskListDataInfoDistance>
      </TaskListDataInfoContainer>

      <TaskListDataExtraContainer>
        <Users size={20} />

        <TaskListDataExtraInfo>
          {person}
        </TaskListDataExtraInfo>
      </TaskListDataExtraContainer>
    </TaskListRow>
  );
}