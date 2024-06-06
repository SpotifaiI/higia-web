import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Clock, PlusCircle, Zap } from "react-feather";

import { colors } from "../../global/theme.js";
import { TaskListItem } from "../../models/TaskListItem.js";
import { AppWrapper } from "../../components/AppWrapper/index.jsx";
import { FormFieldInput } from "../../components/FormFieldInput/index.jsx";
import { TaskList } from "../../components/TaskList/index.jsx";
import { GradientActionButton } from "../../components/GradientActionButton/index.jsx";
import {
  SearchContainer,
  SearchFieldsGroup,
  TaskListGroup,
  TaskListTools,
  TaskTable,
  TaskTableBody,
  TaskTableCell,
  TaskTableContainer,
  TaskTableHead,
  TaskTableHeader,
  TaskTableItem,
  TaskTableRow,
} from "./styles.js";

export function Tasks() {
  const navigation = useNavigate();

  const [tasks, setTasks] = useState({
    [TaskListItem.PENDING_STATUS_TX]: [],
    [TaskListItem.ACTIVE_STATUS_TX]: [],
    [TaskListItem.FINISHED_STATUS_TX]: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    setIsLoading(true); // Set loading state to true

    try {
      const fetchedTasks = await {
        /*future logic here*/
      };
      const elementsTasksList = processTasks(fetchedTasks);
      setTasks(elementsTasksList);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function processTasks(fetchedTasks) {
    const elementsTasksList = {
      [TaskListItem.PENDING_STATUS_TX]: [],
      [TaskListItem.ACTIVE_STATUS_TX]: [],
      [TaskListItem.FINISHED_STATUS_TX]: [],
    };

    for (const task of fetchedTasks) {
      if (task.status === TaskListItem.PENDING_STATUS) {
        elementsTasksList[TaskListItem.PENDING_STATUS_TX].push(task);
      } else if (task.status === TaskListItem.ACTIVE_STATUS) {
        elementsTasksList[TaskListItem.ACTIVE_STATUS_TX].push(task);
      } else if (task.status === TaskListItem.FINISHED_STATUS) {
        elementsTasksList[TaskListItem.FINISHED_STATUS_TX].push(task);
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

    [
      TaskListItem.PENDING_STATUS_TX,
      TaskListItem.ACTIVE_STATUS_TX,
      TaskListItem.FINISHED_STATUS_TX,
    ].map((status) => {
      if (tasks[status] && tasks[status].length > greaterTasksAmount) {
        greaterTasksAmount = tasks[status].length;
      }
    });

    return greaterTasksAmount;
  }

  function onAddTaskHandler() {
    navigation("/tasks/register");
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

        <GradientActionButton>Buscar</GradientActionButton>
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
            {isLoading ? (
              <p>Carregando tarefas...</p>
            ) : (
              <>
                {tasks[TaskListItem.PENDING_STATUS_TX]?.map((task, index) => (
                  <TaskTableRow key={index}>
                    <TaskTableCell>{task.title}</TaskTableCell>
                  </TaskTableRow>
                ))}
                {tasks[TaskListItem.ACTIVE_STATUS_TX]?.map((task, index) => (
                  <TaskTableRow key={index}>
                    <TaskTableCell>{task.title}</TaskTableCell>
                  </TaskTableRow>
                ))}
                {tasks[TaskListItem.FINISHED_STATUS_TX]?.map((task, index) => (
                  <TaskTableRow key={index}>
                    <TaskTableCell>{task.title}</TaskTableCell>
                  </TaskTableRow>
                ))}
              </>
            )}
          </TaskTableBody>
        </TaskTable>
      </TaskTableContainer>

      <TaskListGroup>
        <TaskList
          title="Pendentes"
          icon={Clock}
          items={[new TaskListItem("Avenida JK", "Roberto de Souza", 3)]}
        />

        <TaskList
          title="Ativas"
          icon={Zap}
          items={[new TaskListItem("Avenida JK", "Roberto de Souza", 3)]}
        />

        <TaskList
          title="Concluídas"
          icon={CheckCircle}
          items={[new TaskListItem("Avenida JK", "Roberto de Souza", 3)]}
        />
      </TaskListGroup>
    </AppWrapper>
  );
}
