import {
  CheckCircle,
  List,
  PauseCircle,
  PlayCircle,
  Users,
} from 'react-feather';

import { AppWrapper } from '../../components/AppWrapper/index.jsx';
import { StatsCard } from '../../components/StatsCard/index.jsx';
import {
  DataList,
  MapBox,
  StatisticContainer,
} from './styles.js';
import { TaskMap } from '../../components/TaskMap/index.jsx';
import { FormFieldInput } from '../../components/FormFieldInput/index.jsx';

export function Home() {
  return (
    <AppWrapper title="Informações Gerais">
      <StatisticContainer>
        <DataList>
          <FormFieldInput />
        </DataList>

        <MapBox>
          <TaskMap />
        </MapBox>
      </StatisticContainer>
    </AppWrapper>
  );
}