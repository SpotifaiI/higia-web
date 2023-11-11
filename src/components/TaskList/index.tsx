import { Icon } from 'react-feather';

import { TaskListItem, TaskListItemProps } from '../TaskListItem';
import {
  TaskListContainer,
  TaskListHeader,
  TaskListTable,
  TaskListTitle
} from './styles';

export type TaskListProps = {
  TitleIcon: Icon;
  title: string;
  items: TaskListItemProps[]
};

export function TaskList({
  title,
  items,
  TitleIcon
}: TaskListProps) {
  return (
    <TaskListContainer>
      <TaskListHeader>
        <TitleIcon size={24} />

        <TaskListTitle>
          {title}
        </TaskListTitle>
      </TaskListHeader>

      <TaskListTable>
        {items.map(({ distanceInKm, person, title }, index) => (
          <TaskListItem
            key={index}
            title={title}
            distanceInKm={distanceInKm}
            person={person}
          />
        ))}
      </TaskListTable>
    </TaskListContainer>
  );
}