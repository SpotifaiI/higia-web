import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, PlusCircle, Zap } from 'react-feather';

import { colors } from '../../global/theme.js';
import {
  ACTIVE_STATUS, FINISHED_STATUS,
  PENDING_STATUS,
  TaskListItem,
} from '../../models/TaskListItem.js';
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
  TaskTableBody,
  TaskTableCell,
  TaskTableContainer, TaskTableHead,
  TaskTableHeader, TaskTableItem,
  TaskTableRow,
} from './styles.js';

export function Tasks() {
  const navigation = useNavigate();

  const [tasks, setTasks] = useState({
    [PENDING_STATUS]: [],
    [ACTIVE_STATUS]: [],
    [FINISHED_STATUS]: []
  });

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  function loadTasks() {
    const elementsTasksList = {
      [PENDING_STATUS]: [],
      [ACTIVE_STATUS]: [],
      [FINISHED_STATUS]: []
    };
    const tasksList = sortTasks(fetchTasks());
    const tasksLength = getTasksLength(tasksList);

    let index;

    for (index = 0; index < tasksLength; index++) {
      if (tasksList[PENDING_STATUS][index]) {
        elementsTasksList[PENDING_STATUS]
          .push(tasksList[PENDING_STATUS][index]);
      } else {
        elementsTasksList[PENDING_STATUS]
          .push({});
      }
      if (tasksList[ACTIVE_STATUS][index]) {
        elementsTasksList[ACTIVE_STATUS]
          .push(tasksList[ACTIVE_STATUS][index]);
      } else {
        elementsTasksList[ACTIVE_STATUS]
        .push({});
      }
      if (tasksList[FINISHED_STATUS][index]) {
        elementsTasksList[FINISHED_STATUS]
          .push(tasksList[FINISHED_STATUS][index]);
      } else {
        elementsTasksList[FINISHED_STATUS]
        .push({});
      }
    }

    return elementsTasksList;
  }

  function sortTasks(tasksList) {
    const sortTasks = {};

    for (let taskItem of tasksList) {
      if (!sortTasks[taskItem.status]) {
        sortTasks[taskItem.status] = [];
      }

      sortTasks[taskItem.status].push(taskItem);
    }

    return sortTasks;
  }

  function getTasksLength(tasks) {
    let greaterTasksAmount = 0;

    [PENDING_STATUS, ACTIVE_STATUS, FINISHED_STATUS].map(status => {
      if (tasks[status] && tasks[status].length > greaterTasksAmount) {
        greaterTasksAmount = tasks[status].length;
      }
    });

    return greaterTasksAmount;
  }

  function fetchTasks() {
    return [
      new TaskListItem(
        1,
        'Avenida JK',
        [
          'João', 'Pedro'
        ],
        1,
        2
      ),
      new TaskListItem(
        2,
        'Clareira Amoenta',
        [
          'João', 'Pedro'
        ],
        1,
        2
      ),
      new TaskListItem(
        3,
        'Alameda Ibituba',
        [
          'João', 'Pedro'
        ],
        1,
        2
      ),
      new TaskListItem(
        4,
        'Aluguel Ausente',
        [
          'João', 'Pedro'
        ],
        1,
        2
      ),
      new TaskListItem(
        5,
        'Compra Venda',
        [
          'João', 'Pedro'
        ],
        1,
        2
      ),
      new TaskListItem(
        6,
        'Aluguel Anônimo',
        [
          'João', 'Pedro'
        ],
        1,
        2
      ),
      new TaskListItem(
        7,
        'Avenida Da Saudade',
        [
          'João', 'Pedro'
        ],
        1,
        2
      ),
      new TaskListItem(
        8,
        'Avenida XV',
        [
          'João', 'Pedro'
        ],
        1,
        2
      ),
      new TaskListItem(
        9,
        'Rua da Alegria',
        [
          'João', 'Pedro'
        ],
        1,
        2
      )
    ];
  }

  function onAddTaskHandler() {
     navigation('/tasks/register');
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

      <TaskTableContainer>
        <TaskTable>
          <TaskTableHeader>
            <TaskTableRow>
              <TaskTableHead>
                <TaskTableItem>
                  <Clock size={24} /> Pendentes
                </TaskTableItem>
              </TaskTableHead>

              <TaskTableHead>
                <TaskTableItem>
                  <Zap size={24} /> Ativas
                </TaskTableItem>
              </TaskTableHead>

              <TaskTableHead>
                <TaskTableItem>
                  <CheckCircle size={24} /> Concluídas
                </TaskTableItem>
              </TaskTableHead>
            </TaskTableRow>
          </TaskTableHeader>

          <TaskTableBody>
            {
              tasks[PENDING_STATUS].map((_, index) => (
                <TaskTableRow key={index}>
                  <TaskTableCell>{tasks[PENDING_STATUS][index]}</TaskTableCell>
                  <TaskTableCell>{tasks[ACTIVE_STATUS][index]}</TaskTableCell>
                  <TaskTableCell>{tasks[FINISHED_STATUS][index]}</TaskTableCell>
                </TaskTableRow>
              ))
            }
          </TaskTableBody>
        </TaskTable>
      </TaskTableContainer>

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