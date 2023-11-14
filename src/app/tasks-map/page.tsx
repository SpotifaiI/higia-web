'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { CheckCircle, Clock, Zap, PlusCircle } from 'react-feather';
import { AppWrapper } from '@/components/AppWrapper';
import { FormFieldInput } from '@/components/FormFieldInput';
import { TaskList } from '@/components/TaskList';
import { GradientActionButton } from '@/components/GradientActionButton';
import {
  MapLayout,
  SearchContainer,
  SearchFieldsGroup,
} from './styles';
import { colors } from "@/global/theme";

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
      <MapLayout>
        <MapContainer 
          center={position} 
          zoom={13} 
          scrollWheelZoom={false}
          style={{
            width: '100%',
            height: 700
          }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </MapLayout>
    </AppWrapper>
  );
}

export default TaskMap;
