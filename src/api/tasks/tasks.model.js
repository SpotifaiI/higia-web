import { taskStatus } from '../tasks/tasks.constants.js';

export class Task {
  /**
   * @type {string}
   */
  id;
  /**
   * @type {{
   *   lat: number;
   *   lng: number;
   * }}
   */
  initialCoordinate;
  /**
   * @type {{
   *   lat: number;
   *   lng: number;
   * }}
   */
  endCoordinate;
  /**
   * @type {string}
   */
  description;
  /**
   * @type {string}
   */
  observation;
  /**
   * @type {Date|null}
   */
  initialTime;
  /**
   * @type {Date|null}
   */
  expectedEndTime;
  /**
   * @type {Date|null}
   */
  endTime;
  /**
   * @type {Date|null}
   */
  startTime;
  /**
   * @type {string}
   */
  status;

  /**
   * @param {{
   *     id: string,
   *     description: string,
   *     endCoordinate: {
   *        lat: number;
   *        lng: number;
   *     },
   *     endTime: string|null,
   *     expectedEndTime: string,
   *     initialCoordinate: string,
   *     initialTime: string,
   *     observation: string,
   *     startTime: string|null
   *   }} props
   */
  constructor(props) {
    const {
      description,
      endCoordinate,
      endTime,
      expectedEndTime,
      id,
      initialCoordinate,
      initialTime,
      observation,
      startTime
    } = props;

    this.id = id;

    const splittedInitialCoordinate = initialCoordinate
    .split(',')
    .map(coordinate => parseFloat(coordinate.trim()));
    const splittedEndCoordinate = endCoordinate
    .split(',')
    .map(coordinate => parseFloat(coordinate.trim()));

    this.initialCoordinate = {
      lat: splittedInitialCoordinate[0],
      lng: splittedInitialCoordinate[1]
    };
    this.endCoordinate = {
      lat: splittedEndCoordinate[0],
      lng: splittedEndCoordinate[1]
    };

    this.description = description;
    this.observation = observation;
    this.initialTime = new Date(initialTime);
    this.expectedEndTime = new Date(expectedEndTime);

    if (startTime) {
      this.startTime = new Date(startTime);
    }
    if (endTime) {
      this.endTime = new Date(endTime);
    }

    this.status = taskStatus.pending;
    if (this.startTime) {
      this.status = taskStatus.active;
    }
    if (this.endTime) {
      this.status = taskStatus.concluded;
    }
  }
}