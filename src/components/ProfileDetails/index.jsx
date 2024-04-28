import {
  ProfileDetailsContainer,
  ProfileDetailsData,
  ProfileDetailsLabel,
} from './styles.js';

/**
 * @param {{
 *    label: string,
 *    text: string
 * }} props
 * @returns {JSX.Element}
 * @constructor
 */
export function ProfileDetails(props) {
  const { label, text } = props;

  return (
    <ProfileDetailsContainer>
      <ProfileDetailsLabel>{label}</ProfileDetailsLabel>
      <ProfileDetailsData>{text}</ProfileDetailsData>
    </ProfileDetailsContainer>
  );
}