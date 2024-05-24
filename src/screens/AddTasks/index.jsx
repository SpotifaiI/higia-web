import { Save } from "react-feather";

import { AppWrapper } from "../../components/AppWrapper/index.jsx";
import { FormFieldInput } from "../../components/FormFieldInput/index.jsx";
import { GradientActionButton } from "../../components/GradientActionButton/index.jsx";
import { TaskMap } from "../../components/TaskMap/index.jsx";
import {
  MapBox,
  PriorityInputContainer,
  PriorityInputGroup,
  PriorityInputHigh,
  PriorityInputLabel,
  PriorityInputLow,
  PriorityInputMedium,
  TaskForm,
  TaskFormContainer,
  TaskFormFooter,
  TaskFormRowAddress,
  TaskFormRowGeneral,
  TaskFormRowLocation,
  TaskFormRowRef
} from "./styles.js";

export function AddTasks() {
  return (
    <AppWrapper backTo="/tasks" title="Criar Tarefa">
      <TaskFormContainer>
        <TaskForm>
          <TaskFormRowGeneral>
            <PriorityInputContainer>
              <PriorityInputLabel>
                Prioridade
              </PriorityInputLabel>

              <PriorityInputGroup>
                <PriorityInputLow selected>Baixa</PriorityInputLow>
                <PriorityInputMedium>Média</PriorityInputMedium>
                <PriorityInputHigh>Alta</PriorityInputHigh>
              </PriorityInputGroup>
            </PriorityInputContainer>
          </TaskFormRowGeneral>

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

        <MapBox>
          <TaskMap tasks={[]} />
        </MapBox>

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
