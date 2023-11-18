'use client';

import styled from "styled-components";
import {MapContainer, TileLayer} from "react-leaflet";

export const TaskMapContainer = styled.div`
  width: 100%;
  height: 30rem;
  overflow: hidden;
  border-radius: 1rem;
`;

export const MapBox = styled(MapContainer)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MapLayer = styled(TileLayer)`

`;