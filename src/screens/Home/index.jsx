import { Clock } from 'react-feather';
import { useNavigate } from 'react-router-dom';

import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import { TaskMap } from '../../components/TaskMap/index.jsx';
import { FormFieldInput } from '../../components/FormFieldInput/index.jsx';
import {
  DataList,
  MapBox,
  PendingTaskItem,
  PendingTaskItemTimeContainer,
  PendingTaskItemTimeIcon,
  PendingTaskItemTimeText,
  PendingTaskItemTitle,
  PendingTasksContainer,
  PendingTasksDate,
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

  useEffect(() => {
    load();
  }, []);

  async function load() {
    loadCounting();
    loadAdminTasks();
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
            <TaskStatsNumber>{pendingTasksCount}</TaskStatsNumber>
            <TaskStatsDescription>
              de {finishedTasksCount} foram concluídas
            </TaskStatsDescription>
          </TaskStatsContainer>

          <PendingTasksContainer>
            <PendingTasksSubtitle>
              Tarefas ainda não concluidas
            </PendingTasksSubtitle>

            <PendingTasksList>
              {
                adminPendingTasks.map((datails, parentIndex) => {
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
                            onClick={() => onHandlerTaskItem(task.id)}
                            key={childListKey}>
                            <PendingTaskItemTitle>
                              {task.title}
                            </PendingTaskItemTitle>

                            <PendingTaskItemTimeContainer>
                              <PendingTaskItemTimeIcon>
                                <Clock size={16}/>
                              </PendingTaskItemTimeIcon>
                              <PendingTaskItemTimeText>
                                {task.time}
                              </PendingTaskItemTimeText>
                            </PendingTaskItemTimeContainer>
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
          <TaskMap tasks={adminPendingTasks} />
        </MapBox>
      </StatisticContainer>
    </AppWrapper>
  );
}