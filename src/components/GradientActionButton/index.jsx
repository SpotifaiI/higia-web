import { GradientButton } from './styles.js';

/**
 * @param {import('react').ButtonHTMLAttributes<HTMLButtonElement>} props
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
export function GradientActionButton(props) {
  const { children } = props;

  return (
    <GradientButton {...props}>
      {children}
    </GradientButton>
  );
}