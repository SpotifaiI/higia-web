import {
  TaskListContainer,
  TaskListHeader,
  TaskListTable,
  TaskListTitle,
} from './styles.js';

export function TaskList(props) {
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