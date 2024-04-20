import {
  CheckCircle,
  List,
  PauseCircle,
  PlayCircle,
  Users,
} from 'react-feather';

import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import { StatsCard } from '../../components/StatsCard/index.jsx';
import {
  StatisticContainerList,
  StatisticContainerListMin,
  StatisticListBox,
} from './styles.js';

export function Home() {
  return (
    <AppWrapper title="Informações Gerais">
      <StatisticListBox>
        <StatisticContainerList>
          <StatsCard label="Colaboradores" value="32" icon={Users} />
          <StatsCard label="Tarefas Totais" value="66" icon={List} />
        </StatisticContainerList>

        <StatisticContainerListMin>
          <StatsCard label="Tarefas Pendentes" value="22" icon={PauseCircle} />
          <StatsCard label="Tarefas Ativas" value="20" icon={PlayCircle} />
          <StatsCard label="Tarefas Concluídas" value="24" icon={CheckCircle} />
        </StatisticContainerListMin>
      </StatisticListBox>

    </AppWrapper>
  );
}