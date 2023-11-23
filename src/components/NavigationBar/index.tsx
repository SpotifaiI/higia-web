'use client';

import { usePathname } from "next/navigation";
import Link from 'next/link';
import { TabNavigationButton } from "@/components/TabNavigationButton";
import { routes } from "@/lib/routes";
import {
  ButtonsContainer,
  ImageContainer,
  LogoImage,
  Navigation,
  SpacingContainer
} from "./styles";

export function NavigationBar() {
  const pathname = usePathname();

  return (
    <Navigation>
      <Link href={'/'}>
      <ImageContainer>
        <LogoImage
          src="/assets/images/higia-accent.png"
          alt="Logo"
          fill={true}
        />
      </ImageContainer>
      </Link>
      <ButtonsContainer>
        {routes.map(({ path, Icon }, index) => (
          <TabNavigationButton
            href={path}
            Icon={Icon}
            key={index}
            isSelected={path === pathname}
          />
        ))}
      </ButtonsContainer>

      <SpacingContainer>
        <span></span>
      </SpacingContainer>
    </Navigation>
  );
}