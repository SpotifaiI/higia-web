import { useState } from 'react';
import { Save } from 'react-feather';

import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import { FormFieldInput } from '../../components/FormFieldInput/index.jsx';
import {
  GradientActionButton
} from '../../components/GradientActionButton/index.jsx';
import {
  StatisticContainerList,
  StatisticContainerListMin,
  TaskFormFooterAlign,
} from './styles.js';

export function AddCollaborators() {
  const[nome, setNome] = useState("");
  const[dtnascimento, setNascimanto] = useState("");
  const[email, setEmail] = useState("");
  const[celular, setCelular] = useState("");

  return (
    <AppWrapper backTo="/collaborators" title="Cadastrar Colaborador">
      <StatisticContainerListMin>
        <FormFieldInput
          label='Nome'
          placeholder='Digite o nome do colaborador aqui !'
          onChange={(event) => {
            setNome(event.target.value)
          }}>
        </FormFieldInput>
        <FormFieldInput
          label='Data Nascimento'
          placeholder='dd/mm/aaaa'
          onChange={(event)=>{
            setNascimanto(event.target.value)
          }}>
        </FormFieldInput>
      </StatisticContainerListMin>

      <StatisticContainerList>
        <FormFieldInput
          label='E-mail'
          placeholder='colaborador@email.com'
          onChange={(event)=>{
            setEmail(event.target.value)
          }}>
        </FormFieldInput>
        <FormFieldInput
          label='CPF'
          placeholder='___.___.___-__'>
        </FormFieldInput>
        <FormFieldInput
          label='Celular'
          placeholder='()_____-____'
          onChange={(event)=>{
            setCelular(event.target.value)
          }}>
        </FormFieldInput>
      </StatisticContainerList>

      <TaskFormFooterAlign>
        <GradientActionButton onClick={async()=>{
          const collaborators = new CollaboratorsAPI()
          await collaborators.createColaborators({
            name: nome,
            birthday: new Date(dtnascimento).toISOString(),
            email: email,
            phoneNumber: celular,
            id: ''
          })
        }}>
          <Save size={24} />
          Salvar
        </GradientActionButton>
      </TaskFormFooterAlign>
    </AppWrapper>
  );
}