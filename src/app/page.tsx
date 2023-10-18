import {
  Users,
} from "react-feather";

import {
  Container,
  Content,
  MainTitle,
  StatisticContainerList,
} from "@/app/styles";
import { StatsCard } from "@/components/StatsCard";
import {NavigationBar} from "@/components/NavigationBar";

function App() {
  return (
    <Container>
      <Content>
        <MainTitle>Informações Gerais</MainTitle>

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
      </Content>

      <NavigationBar />
    </Container>
  );
}

export default App;
