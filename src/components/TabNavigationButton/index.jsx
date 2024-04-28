import { NavigationButton } from './styles.js';

/**
 * @param {{
 *   selected: boolean,
 *   icon: import('react-feather').Icon,
 *   href: string
 * }} props
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
export function TabNavigationButton(props) {
  const buttonSize = 32;
  const {
    selected,
    icon: ButtonIcon,
    href,
  } = props;

  return (
    <NavigationButton
      selected={selected}
      to={href}
    >
      <ButtonIcon size={buttonSize} />
    </NavigationButton>
  );
}