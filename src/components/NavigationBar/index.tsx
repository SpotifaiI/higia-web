import {
  Award,
  Home,
  MapPin,
  Settings,
  User,
  Users
} from "react-feather";

import { TabNavigationButton } from "@/components/TabNavigationButton";
import {
  ButtonsContainer,
  ImageContainer,
  LogoImage,
  Navigation,
  SpacingContainer
} from "./styles";

export type NavigationBarProps = {};

export function NavigationBar({}: NavigationBarProps) {
  return (
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
  );
}