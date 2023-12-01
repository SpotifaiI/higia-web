'use client';

<<<<<<< HEAD
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import React from 'react';
import { TasksAPI } from '@/api/tasks/tasks';
import { Task } from "@/api/tasks/tasks.model";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { CheckCircle, Clock, Zap, PlusCircle } from 'react-feather';
=======
>>>>>>> c408351be91891bb52bb7476b3e9f3bf89be162e
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

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const tasksApi = new TasksAPI();
      const tasksList = await tasksApi.getTasks();

      setTasks(tasksList);
    })();
  }, []);

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
