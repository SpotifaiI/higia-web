import React from "react";
import { Icon } from "react-feather";

import { NavigationButton } from "./styles";

export type TabNavigationButtonProps = {
  href: string;
  Icon: Icon;
};

export function TabNavigationButton({
  Icon: ButtonIcon,
  href
}: TabNavigationButtonProps) {
  const buttonSize = 32;

  return (
    <NavigationButton href={href}>
      <ButtonIcon size={buttonSize} />
    </NavigationButton>
  );
}