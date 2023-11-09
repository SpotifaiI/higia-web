import { Award, CheckCircle, List, PauseCircle, PlayCircle, Users } from "react-feather";

import {
  StatisticContainerList,
  StatisticContainerListMin,
  StatisticListBox
} from "./styles";
import { StatsCard } from "@/components/StatsCard";
import { AppWrapper } from "@/components/AppWrapper";

function App() {
  return (
    <AppWrapper title="Informações Gerais">
      <StatisticListBox>
        <StatisticContainerList>
          <StatsCard label="Colaboradores" value="32" Icon={Users} />
          <StatsCard label="Tarefas Totais" value="66" Icon={List} />
        </StatisticContainerList>

        <StatisticContainerListMin>
          <StatsCard label="Tarefas Pendentes" value="22" Icon={PauseCircle} />
          <StatsCard label="Tarefas Ativas" value="20" Icon={PlayCircle} />
          <StatsCard label="Tarefas Concluídas" value="24" Icon={CheckCircle} />
        </StatisticContainerListMin>
      </StatisticListBox>

    </AppWrapper>
  );
}

export default App;
