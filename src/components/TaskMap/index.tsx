import {MapBox, MapLayer, TaskMapContainer} from "./styles";

export function TaskMap() {
  return (
    <TaskMapContainer>
      <MapBox
        center={[45.4, -75.7]}
        zoom={12}
        scrollWheelZoom={true}
        zoomControl={false}>
        <MapLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          noWrap={true}
        />
      </MapBox>
    </TaskMapContainer>
  );
}