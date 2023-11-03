import { ButtonHTMLAttributes } from 'react';

export type GradientActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function GradientActionButton({
  children,
  ...rest
}: GradientActionButtonProps) {
  return (
    <GradientActionButton {...rest}>
      {children}
    </GradientActionButton>
  );
}