import { Users } from "react-feather";

import {
  StatisticContainerList,
} from "./styles";
import { StatsCard } from "@/components/StatsCard";
import { AppWrapper } from "@/components/AppWrapper";

function App() {
  return (
    <AppWrapper title="Informações Gerais">
      <StatisticContainerList>
        <StatsCard label="Colaboradores" value="57" Icon={Users} />
        <StatsCard label="Colaboradores" value="57" Icon={Users} />
        <StatsCard label="Colaboradores" value="57" Icon={Users} />
        <StatsCard label="Colaboradores" value="57" Icon={Users} />
        <StatsCard label="Colaboradores" value="57" Icon={Users} />
        <StatsCard label="Colaboradores" value="57" Icon={Users} />
        <StatsCard label="Colaboradores" value="57" Icon={Users} />
        <StatsCard label="Colaboradores" value="57" Icon={Users} />
        <StatsCard label="Colaboradores" value="57" Icon={Users} />
        <StatsCard label="Colaboradores" value="57" Icon={Users} />
      </StatisticContainerList>
    </AppWrapper>
  );
}

export default App;
