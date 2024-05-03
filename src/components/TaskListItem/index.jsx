import { Users } from 'react-feather';

import {
  TaskHighPriorityIndicator,
  TaskListDataExtraContainer,
  TaskListDataExtraInfo,
  TaskListDataInfoContainer,
  TaskListDataInfoDistance,
  TaskListDataInfoTitle,
  TaskListRow, TaskUserContainer,
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
        <TaskListDataInfoTitle to={`/tasks/update/${title}`}>
          {title}
        </TaskListDataInfoTitle>
        <TaskListDataInfoDistance>
          {distanceInKm} km
        </TaskListDataInfoDistance>
      </TaskListDataInfoContainer>

      <TaskListDataExtraContainer>
        <TaskHighPriorityIndicator />

        <TaskUserContainer>
          <Users size={20} />

          <TaskListDataExtraInfo>
            {person}
          </TaskListDataExtraInfo>
        </TaskUserContainer>
      </TaskListDataExtraContainer>
    </TaskListRow>
  );
}