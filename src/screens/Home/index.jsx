import { Clock } from 'react-feather';

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
  PendingTasksList,
  PendingTasksSubtitle,
  StatisticContainer,
  TaskStatsContainer,
  TaskStatsDescription,
  TaskStatsNumber,
} from './styles.js';

export function Home() {
  return (
    <AppWrapper title="Informações Gerais">
      <StatisticContainer>
        <DataList>
          <FormFieldInput placeholder="Desde..." type="date" />

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
              <PendingTasksDate>
                19/08/2023
              </PendingTasksDate>

              <PendingTaskItem>
                <PendingTaskItemTitle>
                  Avenida JK
                </PendingTaskItemTitle>

                <PendingTaskItemTimeContainer>
                  <PendingTaskItemTimeIcon>
                    <Clock />
                  </PendingTaskItemTimeIcon>
                  <PendingTaskItemTimeText>
                    00:32
                  </PendingTaskItemTimeText>
                </PendingTaskItemTimeContainer>
              </PendingTaskItem>
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