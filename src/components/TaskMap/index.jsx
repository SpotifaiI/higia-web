import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { Icon as LeafletIcon } from 'leaflet';

import { TaskMapContainer } from './styles.js';

import 'leaflet/dist/leaflet.css';
import pendingIcon from '../../../public/assets/map/pending.svg';
import activeIcon from '../../../public/assets/map/active.svg';
import finishedIcon from '../../../public/assets/map/finished.svg';

export function TaskMap() {
  const pendingMapIcon = buildMapIcon(pendingIcon)
  const activeMapIcon = buildMapIcon(activeIcon)
  const finishedMapIcon = buildMapIcon(finishedIcon);

  /**
   * @param mapIcon
   * Binary from imported file will be displayed.
   * @returns {LeafletIcon}
   */
  function buildMapIcon(mapIcon) {
    const size = getMapIconSize(80);

    return new LeafletIcon({
      iconUrl: mapIcon,
      iconRetinaUrl: mapIcon,
      iconSize: size.iconSize,
      iconAnchor: size.iconAnchor,
      popupAnchor : size.popupAnchor
    });
  }

  /**
   * @param {number} size
   * @returns {{popupAnchor: number[], iconAnchor: number[], iconSize: number[]}}
   */
  function getMapIconSize(size) {
    return {
      iconSize: [size, size],
      iconAnchor: [size / 2, size],
      popupAnchor: [0, (-1) * size]
    };
  }

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

        <Marker icon={pendingMapIcon} position={[-26.3045, -48.8489]}>
          <Popup>
            <Link to="tasks/register">show demais</Link>
          </Popup>
        </Marker>
        <Marker icon={activeMapIcon} position={[-26.3026, -48.8461]}>
          <Popup>
            <Link to="tasks/register">show demais</Link>
          </Popup>
        </Marker>
        <Marker icon={finishedMapIcon} position={[-26.3007, -48.8413]}>
          <Popup>
            <Link to="tasks/register">show demais</Link>
          </Popup>
        </Marker>
      </MapContainer>
    </TaskMapContainer>
  );
}