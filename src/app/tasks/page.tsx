import { Clock } from 'react-feather';

import { ActionButton } from '@/components/ActionButton';
import { AppWrapper } from '@/components/AppWrapper';
import { FormFieldInput } from '@/components/FormFieldInput';
import { TaskList } from '@/components/TaskList';
import {
  SearchContainer,
  SearchFieldsGroup,
  TaskListGroup
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
        <TaskList
          title="Pendentes"
          TitleIcon={Clock}
          items={[
            {
              title: "Avenida JK",
              distanceInKm: 2,
              person: 'João da Silva'
            },
            {
              title: "Avenida JK",
              distanceInKm: 2,
              person: 'João da Silva'
            },
            {
              title: "Avenida JK",
              distanceInKm: 2,
              person: 'João da Silva'
            }
          ]}
        />
      </TaskListGroup>
    </AppWrapper>
  );
}

export default Tasks;

