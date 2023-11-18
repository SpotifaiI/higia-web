'use client';

import { Save } from 'react-feather';

import { AppWrapper } from '@/components/AppWrapper';
import { GradientActionButton } from '@/components/GradientActionButton';
import { FormFieldInput } from '@/components/FormFieldInput';
import {TaskMap} from "@/components/TaskMap";

import {
  TaskForm,
  TaskFormContainer,
  TaskFormFooter,
  TaskFormRowGeneral,
  TaskFormRowAddress,
  TaskFormRowRef,
  TaskFormRowLocation
} from './styles';

function RegisterTask() {
  return (
    <AppWrapper backTo="/tasks"  title="Criar Tarefa">
      <TaskFormContainer>
        <TaskForm>
          <TaskFormRowGeneral>
            <FormFieldInput label="Colaborador" />
            <FormFieldInput label="Data Objetivo" />
            <FormFieldInput label="Data Criação" />
          </TaskFormRowGeneral>

          <TaskFormRowAddress>
            <FormFieldInput label="CEP" />
            <FormFieldInput label="Endereço" />
            <FormFieldInput label="Número" />
          </TaskFormRowAddress>

          <TaskFormRowRef>
            <FormFieldInput label="Referência" />
          </TaskFormRowRef>

          <TaskFormRowLocation>
            <FormFieldInput label="Bairro" />
            <FormFieldInput label="Cidade" />
            <FormFieldInput label="Estado" />
          </TaskFormRowLocation>
        </TaskForm>

        <TaskMap />

        <TaskFormFooter>
          <GradientActionButton>
            <Save size={24} />
            Salvar
          </GradientActionButton>
        </TaskFormFooter>
      </TaskFormContainer>
    </AppWrapper>
  );
}

export default RegisterTask;