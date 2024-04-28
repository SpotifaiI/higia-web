import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import { FormFieldInput } from '../../components/FormFieldInput/index.jsx';
import {
  GradientActionButton
} from '../../components/GradientActionButton/index.jsx';
import { TaskMap } from '../../components/TaskMap/index.jsx';
import { SearchContainer, SearchFieldsGroup } from './styles.js';

import 'leaflet/dist/leaflet.css';

export function TasksMap() {
  return (
    <AppWrapper title="Tarefas">
      <SearchContainer>
        <SearchFieldsGroup>
          <FormFieldInput label="Data Início" />
          <FormFieldInput label="Data Fim" />
        </SearchFieldsGroup>

        <GradientActionButton>Buscar</GradientActionButton>
      </SearchContainer>

      <TaskMap />
    </AppWrapper>
  );
}