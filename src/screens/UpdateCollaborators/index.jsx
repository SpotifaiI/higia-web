import { Save, Trash } from 'react-feather';

import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import { FormFieldInput } from '../../components/FormFieldInput/index.jsx';
import {
  GradientActionButton
} from '../../components/GradientActionButton/index.jsx';
import {
  DeleteButton,
  StatisticContainerList,
  StatisticContainerListMin,
  TaskFormFooterAlign,
} from './styles.js';

export function UpdateCollaborators() {
  return (
    <AppWrapper backTo="/colaborators" title="Editar Colaborador">
      <StatisticContainerListMin>
        <FormFieldInput
          label='Nome'
          placeholder='Digite o nome do colaborador aqui !'>
        </FormFieldInput>
        <FormFieldInput
          label='Data Nascimento'
          placeholder='dd/mm/aaaa'>
        </FormFieldInput>
      </StatisticContainerListMin>

      <StatisticContainerList>
        <FormFieldInput
          label='E-mail'
          placeholder='colaborador@email.com'>
        </FormFieldInput>
        <FormFieldInput
          label='CPF'
          placeholder='___.___.___-__'>
        </FormFieldInput>
        <FormFieldInput
          label='Celular'
          placeholder='()_____-____'>
        </FormFieldInput>
      </StatisticContainerList>

      <TaskFormFooterAlign>
        <DeleteButton>
          <Trash size={24} />
          Excluir
        </DeleteButton>

        <GradientActionButton>
          <Save size={24} />
          Salvar
        </GradientActionButton>
      </TaskFormFooterAlign>
    </AppWrapper>
  );
}