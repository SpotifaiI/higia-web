import React from "react";
import { Icon } from "react-feather";

import { NavigationButton } from "./styles";
import { LinkProps } from "next/link";

export type NavigationButtonProps = {
  isSelected: boolean;
} & LinkProps;

export type TabNavigationButtonProps = {
  Icon: Icon;
} & NavigationButtonProps & LinkProps;

export function TabNavigationButton({
  Icon: ButtonIcon,
  isSelected,
  ...rest
}: TabNavigationButtonProps) {
  const buttonSize = 32;

  return (
    <NavigationButton
      isSelected={isSelected}
      {...rest}
    >
      <ButtonIcon size={buttonSize} />
    </NavigationButton>
  );
}