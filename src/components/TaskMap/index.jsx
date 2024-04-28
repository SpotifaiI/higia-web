import { MapContainer, TileLayer } from 'react-leaflet';

import { TaskMapContainer } from './styles.js';

import 'leaflet/dist/leaflet.css';

export function TaskMap() {
  return (
    <TaskMapContainer>
      <MapContainer
        center={[-26.3045, -48.8489]}
        zoom={12}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          noWrap={true}
        />
      </MapContainer>
    </TaskMapContainer>
  );
}