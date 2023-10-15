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
  StatisticContainerList,
  StatisticContainer,
  StatisticTitle,
  StatisticData,
  StatisticIconContainer, StatisticDataContainer
} from "@/app/styles";

function App() {
  const buttonSize = 32;
  const statisticIconSize = 80;

  return (
    <Container>
      <Content>
        <MainTitle>Informações Gerais</MainTitle>

        <StatisticContainerList>
          <StatisticContainer>
            <StatisticDataContainer>
              <StatisticTitle>
                Colaboradores
              </StatisticTitle>
              <StatisticData>
                57
              </StatisticData>
            </StatisticDataContainer>
            <StatisticIconContainer>
              <Users size={statisticIconSize} />
            </StatisticIconContainer>
          </StatisticContainer>

          <StatisticContainer>
            <StatisticDataContainer>
              <StatisticTitle>
                Colaboradores
              </StatisticTitle>
              <StatisticData>
                57
              </StatisticData>
            </StatisticDataContainer>
            <StatisticIconContainer>
              <Users size={statisticIconSize} />
            </StatisticIconContainer>
          </StatisticContainer>

          <StatisticContainer>
            <StatisticDataContainer>
              <StatisticTitle>
                Colaboradores
              </StatisticTitle>
              <StatisticData>
                57
              </StatisticData>
            </StatisticDataContainer>
            <StatisticIconContainer>
              <Users size={statisticIconSize} />
            </StatisticIconContainer>
          </StatisticContainer>

          <StatisticContainer>
            <StatisticDataContainer>
              <StatisticTitle>
                Colaboradores
              </StatisticTitle>
              <StatisticData>
                57
              </StatisticData>
            </StatisticDataContainer>
            <StatisticIconContainer>
              <Users size={statisticIconSize} />
            </StatisticIconContainer>
          </StatisticContainer>

          <StatisticContainer>
            <StatisticDataContainer>
              <StatisticTitle>
                Colaboradores
              </StatisticTitle>
              <StatisticData>
                57
              </StatisticData>
            </StatisticDataContainer>
            <StatisticIconContainer>
              <Users size={statisticIconSize} />
            </StatisticIconContainer>
          </StatisticContainer>
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
