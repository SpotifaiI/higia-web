import Image from "next/image";
import {
  Home,
  Bookmark,
  MapPin,
  Users,
  User,
  Settings
} from 'react-feather';

import {
  Container,
  Navigation,
  Content,
  ImageContainer, ButtonsContainer, SpacingContainer, NavigationButton
} from "@/app/styles";

function App() {
  const buttonSize = 32;

  return (
    <Container>
      <Content>
        <span>Outro Show</span>
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
            <Bookmark size={buttonSize} />
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

        <SpacingContainer></SpacingContainer>
      </Navigation>
    </Container>
  );
}

export default App;
