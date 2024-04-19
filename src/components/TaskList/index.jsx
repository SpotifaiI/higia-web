import { TaskListItem } from '../TaskListItem/index.jsx';
import {
  TaskListContainer,
  TaskListHeader,
  TaskListTable,
  TaskListTitle,
} from './styles.js';

/**
 * @param {{
 *    icon: import('react-feather').Icon,
 *    title: string,
 *    items: import('../../models/TaskListItem.js').TaskListItem[]
 * }} props
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
export function TaskList(props) {
  const { title, icon: TitleIcon, items } = props;

  return (
    <TaskListContainer>
      <TaskListHeader>
        <TitleIcon size={24} />

        <TaskListTitle>
          {title}
        </TaskListTitle>
      </TaskListHeader>

      <TaskListTable>
        {items.map((taskListItem, index) => (
          <TaskListItem
            key={index}
            info={taskListItem}
          />
        ))}
      </TaskListTable>
    </TaskListContainer>
  );
}