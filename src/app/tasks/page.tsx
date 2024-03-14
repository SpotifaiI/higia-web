'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import {
  CheckCircle,
  Clock,
  PlusCircle,
  Zap
} from 'react-feather';

import { TasksAPI } from '@/api/tasks/tasks';
import { Task } from "@/api/tasks/tasks.model";
import { AppWrapper } from '@/components/AppWrapper';
import { FormFieldInput } from '@/components/FormFieldInput';
import { GradientActionButton } from '@/components/GradientActionButton';
import { TaskList } from '@/components/TaskList';
import { colors } from '@/global/theme';

import {
  SearchContainer,
  SearchFieldsGroup,
  TaskListGroup, TaskListTools, TaskTable, TaskTableCell, TaskTableHeader, TaskTableRow
} from './styles';

function Tasks() {
  const router = useRouter();

  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [activeTasks, setActiveTasks] = useState<Task[]>([]);
  const [concludedTasks, setConcludedTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const tasksApi = new TasksAPI();
      const { pending, active, concluded } = await tasksApi.getOrderedTasks();

      setPendingTasks(pending);
      setActiveTasks(active);
      setConcludedTasks(concluded);
    })();
  }, []);

  function onAddTaskHandler() {
    router.push('/tasks/register');
  }

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
        <GradientActionButton onClick={onAddTaskHandler}>
          <PlusCircle size={32} color={colors.white} />
          Adicionar
        </GradientActionButton>
      </TaskListTools>

      <TaskTable>
        <TaskTableHeader>
          <TaskTableRow>
            <TaskTableCell>
              <Clock size={24} /> Pendentes
            </TaskTableCell>

            <TaskTableCell>
              <Zap size={24} /> Ativas
            </TaskTableCell>

            <TaskTableCell>
              <CheckCircle size={24} /> Concluídas
            </TaskTableCell>
          </TaskTableRow>
        </TaskTableHeader>
      </TaskTable>

      <TaskListGroup>
        <TaskList
          title="Pendentes"
          TitleIcon={Clock}
          items={pendingTasks.map(task => ({
            person: 'João da Silva',
            distanceInKm: 23,
            title: task.description
          }))}
        />

        <TaskList
          title="Ativas"
          TitleIcon={Zap}
          items={activeTasks.map(task => ({
            person: 'João da Silva',
            distanceInKm: 23,
            title: task.description
          }))}
        />

        <TaskList
          title="Concluídas"
          TitleIcon={CheckCircle}
          items={concludedTasks.map(task => ({
            person: 'João da Silva',
            distanceInKm: 23,
            title: task.description
          }))}
        />
      </TaskListGroup>
    </AppWrapper>
  );
}

export default Tasks;

