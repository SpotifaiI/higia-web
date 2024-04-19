import { MainButton } from './styles.js';

/**
 * @param {{
 *    label: string,
 *    icon: import('react-feather').Icon
 * } & import('react').ButtonHTMLAttributes<HTMLButtonElement>} props
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
export function ActionButton(props) {
  const { label, icon: Icon } = props;

  return (
    <MainButton {...props}>
      {
        (Icon)
          ? <Icon />
          : null
      }
      {label}
    </MainButton>
  );
}