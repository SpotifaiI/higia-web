import { useEffect, useState } from 'react';
import { PlusCircle } from 'react-feather';

import { CollaboratorsAPI } from '../../api/collaborators/collaborators.js';
import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import {
  ColaboratorsEmail,
  ColaboratorsFont,
  ColaboratorsIncialDate,
  ColaboratorsMainFont,
  ColaboratorsName,
  ColaboratorsTitle,
  CollaboratorsActionWrapper,
} from './styles.js';
import {
  GradientActionButton
} from '../../components/GradientActionButton/index.jsx';
import { useNavigate } from 'react-router-dom';

export function Collaborators() {
  // const router = useRouter();
  const [collaborators, setCollaborators] = useState([]);

  const navigation = useNavigate();

  function onAddColaboratorsHandler() {
    navigation('/collaborators/register');
  }

  useEffect(() => {
    (async () => {
      /*const collaboratorsApi = new CollaboratorsAPI();
      const collaboratorsList = await collaboratorsApi.getCollaborators();

      setCollaborators(collaboratorsList);*/
    })();
  }, []);

  return (
    <AppWrapper title="Colaboradores">

      <CollaboratorsActionWrapper>
        <GradientActionButton onClick={onAddColaboratorsHandler}>
          <PlusCircle size={32} color="white" />
          Adicionar
        </GradientActionButton>
      </CollaboratorsActionWrapper>

      <ColaboratorsTitle>
        <ColaboratorsName>
          <ColaboratorsMainFont>NOME</ColaboratorsMainFont>

          {
            collaborators.map(({ name }, index) => (
              <ColaboratorsFont key={index}>{name}</ColaboratorsFont>
            ))
          }
        </ColaboratorsName>

        <ColaboratorsEmail>
          <ColaboratorsMainFont>E-MAIL</ColaboratorsMainFont>
          {
            collaborators.map(({ email }, index) => (
              <ColaboratorsFont key={index}>{email}</ColaboratorsFont>
            ))
          }
        </ColaboratorsEmail>

        <ColaboratorsIncialDate>
          <ColaboratorsMainFont>CRIAÇÃO</ColaboratorsMainFont>
          {
            collaborators.map(({ birthday }, index) => (
              <ColaboratorsFont key={index}>{birthday.getDate()}</ColaboratorsFont>
            ))
          }
        </ColaboratorsIncialDate>
      </ColaboratorsTitle>
    </AppWrapper>
  );
}