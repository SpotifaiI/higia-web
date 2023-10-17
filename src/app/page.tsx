import Image from "next/image";
import {
  Home,
  Award,
  MapPin,
  Users,
  User,
  Settings
} from 'react-feather';

import {
  Container,
  Navigation,
  Content,
  ImageContainer,
  ButtonsContainer,
  SpacingContainer,
  NavigationButton,
  MainTitle,
  StatisticContainerList
} from "@/app/styles";
import {StatsCard} from "@/components/StatsCard";

function App() {
  const buttonSize = 32;
  const statisticIconSize = 80;

  return (
    <Container>
      <Content>
        <MainTitle>Informações Gerais</MainTitle>

        <StatisticContainerList>
          <StatsCard
            label="Colaboradores"
            value="57"
            Icon={<Users size={statisticIconSize} />}
          />
          <StatsCard
            label="Colaboradores"
            value="57"
            Icon={<Users size={statisticIconSize} />}
          />
          <StatsCard
            label="Colaboradores"
            value="57"
            Icon={<Users size={statisticIconSize} />}
          />
          <StatsCard
            label="Colaboradores"
            value="57"
            Icon={<Users size={statisticIconSize} />}
          />
          <StatsCard
            label="Colaboradores"
            value="57"
            Icon={<Users size={statisticIconSize} />}
          />
          <StatsCard
            label="Colaboradores"
            value="57"
            Icon={<Users size={statisticIconSize} />}
          />
        </StatisticContainerList>
      </Content>
      <Navigation>
        <ImageContainer>
          <Image
            src="/assets/images/higia-accent.png"
            alt="Logo"
            fill={true}
          />
        </ImageContainer>

        <ButtonsContainer>
          <NavigationButton href="/">
            <Home size={buttonSize} />
          </NavigationButton>
          <NavigationButton href="/">
            <Award size={buttonSize} />
          </NavigationButton>
          <NavigationButton href="/">
            <MapPin size={buttonSize} />
          </NavigationButton>
          <NavigationButton href="/">
            <Users size={buttonSize} />
          </NavigationButton>
          <NavigationButton href="/">
            <User size={buttonSize} />
          </NavigationButton>
          <NavigationButton href="/">
            <Settings size={buttonSize} />
          </NavigationButton>
        </ButtonsContainer>

        <SpacingContainer>
          <span></span>
        </SpacingContainer>
      </Navigation>
    </Container>
  );
}

export default App;
