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
        <TabNavigationButton href="/tasks" Icon={Award} />
        <TabNavigationButton href="/map" Icon={MapPin} />
        <TabNavigationButton href="/colaborators" Icon={Users} />
        <TabNavigationButton href="/profile" Icon={User} />
        <TabNavigationButton href="/settings" Icon={Settings} />
      </ButtonsContainer>

      <SpacingContainer>
        <span></span>
      </SpacingContainer>
    </Navigation>
  );
}