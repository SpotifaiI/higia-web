import { useEffect, useState } from 'react';
import { CheckCircle, Clock, PlusCircle, Zap } from 'react-feather';

import { colors } from '../../global/theme.js';
import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import { FormFieldInput } from '../../components/FormFieldInput/index.jsx';
import { TaskList } from '../../components/TaskList/index.jsx';
import {
  GradientActionButton
} from '../../components/GradientActionButton/index.jsx';
import {
  SearchContainer,
  SearchFieldsGroup,
  TaskListGroup,
  TaskListTools,
  TaskTable,
  TaskTableCell,
  TaskTableHeader,
  TaskTableRow,
} from './styles.js';
import { TaskListItem } from '../../models/TaskListItem.js';

export function Tasks() {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);
  const [concludedTasks, setConcludedTasks] = useState([]);

  useEffect(() => {
    (async () => {
      // const tasksApi = new TasksAPI();
      // const { pending, active, concluded } = await tasksApi.getOrderedTasks();
      //
      // setPendingTasks(pending);
      // setActiveTasks(active);
      // setConcludedTasks(concluded);
    })();
  }, []);

  function onAddTaskHandler() {
    // router.push('/tasks/register');
  }

  return (
    <AppWrapper title="Tarefas">
      <SearchContainer>
        <SearchFieldsGroup>
          <FormFieldInput label="Colaborador" />
          <FormFieldInput label="Descrição" />
        </SearchFieldsGroup>
        <SearchFieldsGroup>
          <FormFieldInput label="Data Início" />
          <FormFieldInput label="Data Fim" />
        </SearchFieldsGroup>

        <GradientActionButton>
          Buscar
        </GradientActionButton>
      </SearchContainer>

      <TaskListTools>
        <GradientActionButton onClick={onAddTaskHandler}>
          <PlusCircle size={32} color={colors.white} />
          Adicionar
        </GradientActionButton>
      </TaskListTools>

      <TaskListGroup>
        <TaskList
          title="Pendentes"
          icon={Clock}
          items={[
            new TaskListItem(
                'Avenida JK',
                'Roberto de Souza',
                3
            )
          ]}
        />

        <TaskList
          title="Ativas"
          icon={Zap}
          items={[
            new TaskListItem(
              'Avenida JK',
              'Roberto de Souza',
              3
            )
          ]}
        />

        <TaskList
          title="Concluídas"
          icon={CheckCircle}
          items={[
            new TaskListItem(
              'Avenida JK',
              'Roberto de Souza',
              3
            )
          ]}
        />
      </TaskListGroup>
    </AppWrapper>
  );
}