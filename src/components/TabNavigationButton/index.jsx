/**
 * @param {{
 *   isSelected: boolean,
 *   Icon: import('react-feather').Icon,
 *   key: number,
 *   href: string
 * }} props
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
export function TabNavigationButton(props) {
  const buttonSize = 32;
  const { isSelected, Icon: ButtonIcon } = props;

  return (
    <NavigationButton
      isSelected={isSelected}
      {...props}
    >
      <ButtonIcon size={buttonSize} />
    </NavigationButton>
  );
}