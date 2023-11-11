import { Users } from 'react-feather';

import {
  TaskListDataExtraContainer,
  TaskListDataExtraInfo,
  TaskListDataInfoContainer,
  TaskListDataInfoDistance,
  TaskListDataInfoTitle,
  TaskListRow
} from './styles';

export type TaskListItemProps = {
  title: string;
  distanceInKm: number;
  person: string;
};

export function TaskListItem({
  title,
  distanceInKm,
  person
}: TaskListItemProps) {
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