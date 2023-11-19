import {
  ProfileDetailsContainer,
  ProfileDetailsData,
  ProfileDetailsLabel,
} from "./styles";

export type ProfileDetailsProps = {
  label: string;
  text: string;
};

export function ProfileDetails({ label, text }: ProfileDetailsProps) {
  return (
    <ProfileDetailsContainer>
      <ProfileDetailsLabel>{label}</ProfileDetailsLabel>
      <ProfileDetailsData>{text}</ProfileDetailsData>
    </ProfileDetailsContainer>
  );
}
