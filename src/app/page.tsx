import {
  Home,
  Award,
  MapPin,
  Users,
  User,
  Settings
} from "react-feather";

import {
  Container,
  Navigation,
  Content,
  ImageContainer,
  ButtonsContainer,
  SpacingContainer,
  MainTitle,
  StatisticContainerList,
  LogoImage
} from "@/app/styles";
import { StatsCard } from "@/components/StatsCard";
import { TabNavigationButton } from "@/components/TabNavigationButton";

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
      <Navigation>
        <ImageContainer>
          <LogoImage
            src="/assets/images/higia-accent.png"
            alt="Logo"
            fill={true}
          />
        </ImageContainer>

        <ButtonsContainer>
          <TabNavigationButton href="/" Icon={Home} />
          <TabNavigationButton href="/" Icon={Award} />
          <TabNavigationButton href="/" Icon={MapPin} />
          <TabNavigationButton href="/" Icon={Users} />
          <TabNavigationButton href="/" Icon={User} />
          <TabNavigationButton href="/" Icon={Settings} />
        </ButtonsContainer>

        <SpacingContainer>
          <span></span>
        </SpacingContainer>
      </Navigation>
    </Container>
  );
}

export default App;
