'use client';

import { useState } from "react";

import { TabNavigationButton } from "@/components/TabNavigationButton";
import { routes } from "@/lib/routes";
import {
  ButtonsContainer,
  ImageContainer,
  LogoImage,
  Navigation,
  SpacingContainer
} from "./styles";

export type NavigationBarProps = {};

export function NavigationBar({}: NavigationBarProps) {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

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
        {routes.map(({ path, Icon }, index) => (
          <TabNavigationButton
            href={path}
            Icon={Icon}
            key={index}
            isSelected={selectedMenuItem === index}
            onClick={() => setSelectedMenuItem(index)}
          />
        ))}
      </ButtonsContainer>

      <SpacingContainer>
        <span></span>
      </SpacingContainer>
    </Navigation>
  );
}