import { Clock } from 'react-feather';

import { ActionButton } from '@/components/ActionButton';
import { AppWrapper } from '@/components/AppWrapper';
import { FormFieldInput } from '@/components/FormFieldInput';
import { TaskListDataItem } from '@/components/TaskListDataItem';
import {
  SearchContainer,
  SearchFieldsGroup,
  TaskListContainer,
  TaskListGroup,
  TaskListHeader,
  TaskListTable,
  TaskListTitle
} from './styles';

function Tasks() {
  return (
    <AppWrapper title="Tarefas">
      <SearchContainer>
        <SearchFieldsGroup>
          <FormFieldInput label="Colaborador" />
          <FormFieldInput label="Descrição" />
        </SearchFieldsGroup>
        <SearchFieldsGroup>
          <FormFieldInput label="Data Início" />
          <FormFieldInput label="Data Fim" />
        </SearchFieldsGroup>

        <ActionButton
          label="Buscar"
        />
      </SearchContainer>

      <TaskListGroup>
        <TaskListContainer>
          <TaskListHeader>
            <Clock size={24} />

            <TaskListTitle>
              Pendentes
            </TaskListTitle>
          </TaskListHeader>

          <TaskListTable>
            <TaskListDataItem
              title="Avenida JK"
              distanceInKm={2}
              person="João da Silva"
            />
          </TaskListTable>
        </TaskListContainer>
      </TaskListGroup>
    </AppWrapper>
  );
}

export default Tasks;

