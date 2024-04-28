import { User } from 'react-feather';

import { colors } from '../../global/theme.js';
import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import { ProfileDetails } from '../../components/ProfileDetails/index.jsx';
import {
  ProfileAvatar, ProfileBody,
  ProfileContainer,
  ProfileHeader,
  ProfileName,
} from './styles.js';

export function Profile() {
  return (
    <AppWrapper title="Perfil">
      <ProfileContainer>
        <ProfileHeader>
          <ProfileAvatar>
            <User size={100} color={colors.white} />
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