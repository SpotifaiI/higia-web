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
  PendingTaskItemTimeIcon, PendingTaskItemTimeText,
  PendingTaskItemTitle,
  PendingTasksContainer,
  PendingTasksDate,
  PendingTasksList, PendingTasksListItem,
  PendingTasksSubtitle,
  StatisticContainer,
  TaskStatsContainer,
  TaskStatsDescription,
  TaskStatsNumber,
} from './styles.js';

export function Home() {
  const navigate = useNavigate();

  function onHandlerTaskItem() {
    navigate('tasks/register');
  }

  return (
    <AppWrapper title="Informações Gerais">
      <StatisticContainer>
        <DataList>
          <FormFieldInput label="Mostrar tarefas desde" type="date" />

          <TaskStatsContainer>
            <TaskStatsNumber>67</TaskStatsNumber>
            <TaskStatsDescription>
              de 128 foram concluídas
            </TaskStatsDescription>
          </TaskStatsContainer>

          <PendingTasksContainer>
            <PendingTasksSubtitle>
              Tarefas ainda não concluidas
            </PendingTasksSubtitle>

            <PendingTasksList>
              <PendingTasksListItem>
                <PendingTasksDate>
                  19/08/2023
                </PendingTasksDate>

                <PendingTaskItem onClick={onHandlerTaskItem}>
                  <PendingTaskItemTitle>
                    Avenida JK
                  </PendingTaskItemTitle>

                  <PendingTaskItemTimeContainer>
                    <PendingTaskItemTimeIcon>
                      <Clock size={16} />
                    </PendingTaskItemTimeIcon>
                    <PendingTaskItemTimeText>
                      00:32
                    </PendingTaskItemTimeText>
                  </PendingTaskItemTimeContainer>
                </PendingTaskItem>
              </PendingTasksListItem>

              <PendingTasksListItem>
                <PendingTasksDate>
                  19/08/2023
                </PendingTasksDate>

                <PendingTaskItem onClick={onHandlerTaskItem}>
                  <PendingTaskItemTitle>
                    Avenida JK
                  </PendingTaskItemTitle>

                  <PendingTaskItemTimeContainer>
                    <PendingTaskItemTimeIcon>
                      <Clock size={16} />
                    </PendingTaskItemTimeIcon>
                    <PendingTaskItemTimeText>
                      00:32
                    </PendingTaskItemTimeText>
                  </PendingTaskItemTimeContainer>
                </PendingTaskItem>

                <PendingTaskItem onClick={onHandlerTaskItem}>
                  <PendingTaskItemTitle>
                    Avenida JK
                  </PendingTaskItemTitle>

                  <PendingTaskItemTimeContainer>
                    <PendingTaskItemTimeIcon>
                      <Clock size={16} />
                    </PendingTaskItemTimeIcon>
                    <PendingTaskItemTimeText>
                      00:32
                    </PendingTaskItemTimeText>
                  </PendingTaskItemTimeContainer>
                </PendingTaskItem>

                <PendingTaskItem onClick={onHandlerTaskItem}>
                  <PendingTaskItemTitle>
                    Avenida JK
                  </PendingTaskItemTitle>

                  <PendingTaskItemTimeContainer>
                    <PendingTaskItemTimeIcon>
                      <Clock size={16} />
                    </PendingTaskItemTimeIcon>
                    <PendingTaskItemTimeText>
                      00:32
                    </PendingTaskItemTimeText>
                  </PendingTaskItemTimeContainer>
                </PendingTaskItem>
              </PendingTasksListItem>
            </PendingTasksList>
          </PendingTasksContainer>
        </DataList>

        <MapBox>
          <TaskMap />
        </MapBox>
      </StatisticContainer>
    </AppWrapper>
  );
}