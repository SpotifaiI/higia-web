import { Save } from 'react-feather';

import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import { FormFieldInput } from '../../components/FormFieldInput/index.jsx';
import { TaskMap } from '../../components/TaskMap/index.jsx';
import {
  GradientActionButton
} from '../../components/GradientActionButton/index.jsx';
import {
  TaskForm,
  TaskFormContainer,
  TaskFormFooter,
  TaskFormRowAddress,
  TaskFormRowGeneral,
  TaskFormRowLocation,
  TaskFormRowRef,
} from './styles.js';

export function AddTasks() {
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