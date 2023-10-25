import { Icon } from "react-feather";

import { MainButton } from "./styles";

export type ActionButtonProps = {
  label: string;
  Icon?: Icon;
} & HTMLButtonElement;

export function ActionButton({
  label,
  Icon,
  ...rest
}: ActionButtonProps) {
  return (
    <MainButton {...rest}>
      {
        (Icon)
          ? <Icon />
          : null
      }
      {label}
    </MainButton>
  );
}