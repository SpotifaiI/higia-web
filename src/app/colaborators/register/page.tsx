'use client';

import { Save } from 'react-feather';

import { AppWrapper } from '@/components/AppWrapper';
import { GradientActionButton } from '@/components/GradientActionButton';
import { FormFieldInput } from '@/components/FormFieldInput';
import { AddColaboratorsTitles, StatisticContainerList, StatisticContainerListMin, TaskFormFooterAlign } from './styles';

function RegisterTask() {
  return (
    <AppWrapper backTo="/colaborators" title="Cadastrar Colaborador">

    <StatisticContainerListMin>

      <FormFieldInput label='Nome' placeholder='Digite o nome do colaborador aqui !'></FormFieldInput>
      <FormFieldInput label='Data Nascimento' placeholder='dd/mm/aaaa'></FormFieldInput>  


    </StatisticContainerListMin>

    <StatisticContainerList>

    <FormFieldInput label='E-mail' placeholder='colaborador@email.com'></FormFieldInput>
    <FormFieldInput label='CPF' placeholder='___.___.___-__'></FormFieldInput>
    <FormFieldInput label='Celular' placeholder='()_____-____'></FormFieldInput>

    </StatisticContainerList>

      <TaskFormFooterAlign>
          <GradientActionButton>
            <Save size={24} />
            Salvar
          </GradientActionButton>
      </TaskFormFooterAlign>



    </AppWrapper>
  );
}

export default RegisterTask;