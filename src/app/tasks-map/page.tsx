'use client';

import { AppWrapper } from '@/components/AppWrapper';
import { FormFieldInput } from '@/components/FormFieldInput';
import { GradientActionButton } from '@/components/GradientActionButton';
import { TaskMap as TaskMapComponent } from '@/components/TaskMap';
import {
  SearchContainer,
  SearchFieldsGroup,
} from './styles';

function TaskMap() {
  const position = {
    lat: 51.505,
    lng: -0.09
  }; // coordenadas iniciais

  return (
    <AppWrapper title="Tarefas">
      <SearchContainer>
        <SearchFieldsGroup>
          <FormFieldInput label="Data Início" />
          <FormFieldInput label="Data Fim" />
        </SearchFieldsGroup>

        <GradientActionButton>
          Buscar
        </GradientActionButton>
      </SearchContainer>

      {/* Mapa React Leaflet */}
      <TaskMapComponent />
    </AppWrapper>
  );
}

export default TaskMap;
