import { FC } from "react";
import { AppWrapper } from "@/components/AppWrapper";
import { ProfileDetails } from "../../components/ProfileDetails";
import { User } from "react-feather";
import React from "react";

import {
  ProfileAvatar,
  ProfileBody,
  ProfileContainer,
  ProfileHeader,
  ProfileName,
  lastComponent,
} from "./styles";

type IconProps = {
  icon: React.ReactElement;
  size?: number;
};

const IconProfile: FC<IconProps> = ({ icon, size = 100 }) => (
  <div style={{ height: size, width: size }}>
    {React.cloneElement(icon, { size: "100%", color: "white" })}
  </div>
);

function Profile() {
  return (
    <AppWrapper title="Perfil">
      <ProfileContainer>
        <ProfileHeader>
          <ProfileAvatar>
            <IconProfile icon={<User />} size={100} />
          </ProfileAvatar>
          <ProfileName>Alberto da Nóbrega</ProfileName>
        </ProfileHeader>
        <ProfileBody>
          <ProfileDetails label="E-mail" text="contato@aberto.com.br" />
          <ProfileDetails label="Telefone" text="(47) 9 9999-9999" />
          <ProfileDetails label="Data de Nascimento" text="23/10/1963" />
          <ProfileDetails
            label="CPF"
            text="000.000.000-00"
          />
        </ProfileBody>
      </ProfileContainer>
    </AppWrapper>
  );
}

export default Profile;
