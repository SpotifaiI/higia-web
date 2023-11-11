import { Clock, Users } from 'react-feather';

import { ActionButton } from '@/components/ActionButton';
import { AppWrapper } from '@/components/AppWrapper';
import { FormFieldInput } from '@/components/FormFieldInput';
import {
  SearchContainer,
  SearchFieldsGroup,
  TaskListContainer,
  TaskListDataExtraContainer,
  TaskListDataExtraInfo,
  TaskListDataInfoContainer,
  TaskListDataInfoDistance,
  TaskListDataInfoTitle,
  TaskListGroup,
  TaskListHeader,
  TaskListRow,
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
            <TaskListRow>
              <TaskListDataInfoContainer>
                <TaskListDataInfoTitle href="/tasks">
                  Avenida JK
                </TaskListDataInfoTitle>
                <TaskListDataInfoDistance>
                  2 km
                </TaskListDataInfoDistance>
              </TaskListDataInfoContainer>

              <TaskListDataExtraContainer>
                <Users size={20} />

                <TaskListDataExtraInfo>
                  João da Silva
                </TaskListDataExtraInfo>
              </TaskListDataExtraContainer>
            </TaskListRow>

            <TaskListRow>
              <TaskListDataInfoContainer>
                <TaskListDataInfoTitle href="/tasks">
                  Avenida JK
                </TaskListDataInfoTitle>
                <TaskListDataInfoDistance>
                  2 km
                </TaskListDataInfoDistance>
              </TaskListDataInfoContainer>

              <TaskListDataExtraContainer>
                <Users size={20} />

                <TaskListDataExtraInfo>
                  João da Silva
                </TaskListDataExtraInfo>
              </TaskListDataExtraContainer>
            </TaskListRow>

            <TaskListRow>
              <TaskListDataInfoContainer>
                <TaskListDataInfoTitle href="/tasks">
                  Avenida JK
                </TaskListDataInfoTitle>
                <TaskListDataInfoDistance>
                  2 km
                </TaskListDataInfoDistance>
              </TaskListDataInfoContainer>

              <TaskListDataExtraContainer>
                <Users size={20} />

                <TaskListDataExtraInfo>
                  João da Silva
                </TaskListDataExtraInfo>
              </TaskListDataExtraContainer>
            </TaskListRow>
          </TaskListTable>
        </TaskListContainer>
      </TaskListGroup>
    </AppWrapper>
  );
}

export default Tasks;

