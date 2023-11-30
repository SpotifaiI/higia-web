import { taskStatus } from './tasks.constants';

export type TaskCoordinate = {
  lat: number;
  lng: number;
};

export type OrderedTasks = {
  pending: Task[];
  active: Task[];
  concluded: Task[];
};

export type DbTask = {
  id: string;
  initialCoordinate: string;
  endCoordinate: string;
  description: string;
  observation: string;
  initialTime: string;
  expectedEndTime: string;
  endTime: string | null;
  startTime: string | null;
}

export class Task {
  public id: string;
  public initialCoordinate: TaskCoordinate;
  public endCoordinate: TaskCoordinate;
  public description: string;
  public observation: string;
  public initialTime: Date;
  public expectedEndTime: Date;
  public endTime!: Date;
  public startTime!: Date;
  public status: string;

  constructor({
    id,
    description,
    endCoordinate,
    endTime,
    expectedEndTime,
    initialCoordinate,
    initialTime,
    observation,
    startTime
  }: DbTask) {
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