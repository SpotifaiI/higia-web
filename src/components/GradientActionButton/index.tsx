import { ButtonHTMLAttributes } from 'react';

import { GradientButton } from './styles';

export type GradientActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function GradientActionButton({
  children,
  ...rest
}: GradientActionButtonProps) {
  return (
    <GradientButton {...rest}>
      {children}
    </GradientButton>
  );
}