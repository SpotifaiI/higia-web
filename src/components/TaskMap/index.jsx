import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { Link } from "react-router-dom";
import { Icon as LeafletIcon } from "leaflet";

import { TaskMapContainer } from "./styles.js";

import "leaflet/dist/leaflet.css";
import pendingIcon from "/assets/map/pending.svg";
import activeIcon from "/assets/map/active.svg";
import finishedIcon from "/assets/map/finished.svg";

/**
 * @param {{
 *  tasks: {
 *     date: string,
 *     items: {
 *       title: string,
 *       time: string,
 *       id: number,
 *       position: number[]
 *     }[]
 *   }[]
 *   onMapClick: (lat: number, lng: number) => void
 * }} props
 * @returns {JSX.Element}
 * @constructor
 */
export function TaskMap(props) {
  const { tasks, onMapClick } = props;

  const pendingMapIcon = buildMapIcon(pendingIcon);
  const activeMapIcon = buildMapIcon(activeIcon);
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
      popupAnchor: size.popupAnchor,
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
      popupAnchor: [0, -1 * size],
    };
  }

  function LocationMarker() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        onMapClick(lat, lng);
      },
    });
    return null;
  }

  return (
    <TaskMapContainer>
      <MapContainer
        center={[-26.3045, -48.8489]}
        zoom={12}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          noWrap={true}
        />

        <LocationMarker />

        {tasks.map((taskToShow, taskIndex) => {
          const markerKey = `task_map_marker_${taskIndex}`;

          return taskToShow.items.map((item, itemIndex) => {
            const itemKey = `${markerKey}_${itemIndex}`;

            return (
              <Marker
                icon={pendingMapIcon}
                position={item.position}
                key={itemKey}
              >
                <Popup>
                  <Link to={`tasks/register/${item.id}`}>{item.title}</Link>
                </Popup>
              </Marker>
            );
          });
        })}
      </MapContainer>
    </TaskMapContainer>
  );
}
