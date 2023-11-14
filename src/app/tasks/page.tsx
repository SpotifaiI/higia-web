import {CheckCircle, Clock, Zap, PlusCircle} from 'react-feather';

import { AppWrapper } from '@/components/AppWrapper';
import { FormFieldInput } from '@/components/FormFieldInput';
import { TaskList } from '@/components/TaskList';
import { GradientActionButton } from '@/components/GradientActionButton';
import {
  SearchContainer,
  SearchFieldsGroup,
  TaskListGroup, TaskListTools
} from './styles';
import {colors} from "@/global/theme";

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

        <GradientActionButton>
          Buscar
        </GradientActionButton>
      </SearchContainer>

      <TaskListTools>
        <GradientActionButton>
          <PlusCircle size={32} color={colors.white} />
          Adicionar
        </GradientActionButton>
      </TaskListTools>

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

        <TaskList
          title="Ativas"
          TitleIcon={Zap}
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

        <TaskList
          title="Concluídas"
          TitleIcon={CheckCircle}
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

