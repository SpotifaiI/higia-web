import { Check, Clock, Pause, Play } from 'react-feather';
import { useNavigate } from 'react-router-dom';

import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import { TaskMap } from '../../components/TaskMap/index.jsx';
import { FormFieldInput } from '../../components/FormFieldInput/index.jsx';
import {
  DataList,
  MapBox,
  PendingTaskItem,
  PendingTaskItemButton,
  PendingTaskItemDetailsContainer,
  PendingTaskItemDistance,
  PendingTaskItemTimeContainer,
  PendingTaskItemTimeIcon,
  PendingTaskItemTimeText,
  PendingTaskItemTitle, PendingTasksActionContainer,
  PendingTasksContainer,
  PendingTasksDate,
  PendingTasksItemButtonContainer,
  PendingTasksList,
  PendingTasksListItem,
  PendingTasksSubtitle,
  StatisticContainer,
  TaskStatsContainer,
  TaskStatsDescription,
  TaskStatsNumber,
} from './styles.js';
import { useEffect, useState } from 'react';

export function Home() {
  const navigate = useNavigate();

  const [finishedTasksCount, setFinishedTasksCount] = useState(0);
  const [pendingTasksCount, setPendingTasksCount] = useState(0);
  const [adminPendingTasks, setAdminPendingTasks] = useState([]);
  const [collaboratorPendingTasks, setCollaboratorPendingTasks] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    loadCounting();

    if (isAdmin) {
      loadAdminTasks();
    } else {
      loadCollaboratorTasks();
    }
  }

  /**
   * @returns {Promise<void>}
   */
  async function loadCounting() {
    const { finished, pending } = await getTasksCount();

    if (finished) {
      setFinishedTasksCount(finished);
    }
    if (pending) {
      setPendingTasksCount(pending);
    }
  }

  /**
   * @returns {Promise<void>}
   */
  async function loadAdminTasks() {
    const { tasks } = await getAdminPendingTasks();

    if (tasks) {
      setAdminPendingTasks(tasks);
    }
  }

  /**
   * @returns {Promise<void>}
   */
  async function loadCollaboratorTasks() {
    const { tasks } = await getAdminPendingTasks();

    if (tasks) {
      setCollaboratorPendingTasks(tasks);
    }
  }

  /**
   * @returns {Promise<{
   *   tasks: {
   *     date: string,
   *     items: {
   *       title: string,
   *       time: string,
   *       id: number,
   *       position: number[]
   *     }[]
   *   }[]
   * }>}
   */
  async function getAdminPendingTasks() {
    return new Promise((resolve) => {
      resolve({
        tasks: [
          {
            date: '19/08/2023',
            items: [
              {
                id: 1,
                title: 'Avenida JK',
                time: '00:32',
                position: [-26.3007, -48.8413]
              }
            ]
          },
          {
            date: '20/08/2023',
            items: [
              {
                id: 2,
                title: 'Avenida JK',
                time: '00:32',
                position: [-26.3045, -48.8489]
              },
              {
                id: 3,
                title: 'Avenida JK',
                time: '00:32',
                position: [-26.3026, -48.8461]
              },
              {
                id: 4,
                title: 'Avenida JK',
                time: '00:32',
                position: [-26.3045, -48.8123]
              },
              {
                id: 5,
                title: 'Avenida JK',
                time: '00:32',
                position: [-26.3012, -48.8498]
              }
            ]
          },
          {
            date: '21/08/2023',
            items: [
              {
                id: 6,
                title: 'Avenida JK',
                time: '00:32',
                position: [-26.3045, -48.8489]
              },
              {
                id: 7,
                title: 'Avenida JK',
                time: '00:32',
                position: [-26.3045, -48.8754]
              }
            ]
          }
        ]
      });
    });
  }

  /**
   * @returns {Promise<{
   *   pending: number,
   *   finished: number
   * }>}
   */
  async function getTasksCount() {
    return new Promise((resolve) => {
      resolve({
        pending: 128,
        finished: 67
      });
    });
  }

  /**
   * @param {number} taskId
   */
  function onHandlerTaskItem(taskId) {
    navigate(`tasks/register/${taskId}`);
  }

  return (
    <AppWrapper title="Informações Gerais">
      <StatisticContainer>
        <DataList>
          <FormFieldInput label="Mostrar tarefas desde" type="date" />

          <TaskStatsContainer>
            <TaskStatsNumber>{finishedTasksCount}</TaskStatsNumber>
            <TaskStatsDescription>
              de {pendingTasksCount} foram concluídas
            </TaskStatsDescription>
          </TaskStatsContainer>

          <PendingTasksContainer>
            <PendingTasksSubtitle>
              Tarefas ainda não concluidas
            </PendingTasksSubtitle>

            <PendingTasksList>
              {
                (
                  isAdmin
                    ? adminPendingTasks
                    : collaboratorPendingTasks
                ).map((datails, parentIndex) => {
                  const parentListKey = `admin_pending_tasks_${parentIndex}`;

                  return (
                    <PendingTasksListItem key={parentListKey}>
                      <PendingTasksDate>
                        {datails.date}
                      </PendingTasksDate>

                      {datails.items.map((task, childKey) => {
                        const childListKey = `${parentListKey}_${childKey}`;

                        return (
                          <PendingTaskItem
                            key={childListKey}>
                            <PendingTaskItemDetailsContainer>
                              <PendingTaskItemTitle
                                onClick={() => onHandlerTaskItem(task.id)}>
                                {task.title}
                              </PendingTaskItemTitle>

                              <PendingTaskItemDistance>
                                5km
                              </PendingTaskItemDistance>
                            </PendingTaskItemDetailsContainer>

                            <PendingTasksActionContainer>
                              <PendingTaskItemTimeContainer>
                                <PendingTaskItemTimeIcon>
                                  <Clock size={16}/>
                                </PendingTaskItemTimeIcon>
                                <PendingTaskItemTimeText>
                                  {task.time}
                                </PendingTaskItemTimeText>
                              </PendingTaskItemTimeContainer>

                              <PendingTasksItemButtonContainer>
                                <PendingTaskItemButton>
                                  <Play />
                                </PendingTaskItemButton>

                                <PendingTaskItemButton>
                                  <Pause />
                                </PendingTaskItemButton>

                                <PendingTaskItemButton>
                                  <Check />
                                </PendingTaskItemButton>
                              </PendingTasksItemButtonContainer>
                            </PendingTasksActionContainer>
                          </PendingTaskItem>
                        );
                      })}
                    </PendingTasksListItem>
                  );
                })
              }
            </PendingTasksList>
          </PendingTasksContainer>
        </DataList>

        <MapBox>
          <TaskMap tasks={isAdmin ? adminPendingTasks : collaboratorPendingTasks} />
        </MapBox>
      </StatisticContainer>
    </AppWrapper>
  );
}