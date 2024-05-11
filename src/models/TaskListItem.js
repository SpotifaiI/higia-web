export const LOW_PRIORITY = 1;
export const MEDIUM_PRIORITY = 2;
export const HIGH_PRIORITY = 3;
export const PENDING_STATUS = 1;
export const ACTIVE_STATUS = 2;
export const FINISHED_STATUS = 3;

export class TaskListItem {
  id;
  title;
  person;
  distanceInKm;
  priority;
  status;

  constructor(
    id,
    title,
    people,
    distanceInKm,
    priority = LOW_PRIORITY,
    status = PENDING_STATUS
  ) {
    this.id = id;
    this.title = title;
    this.person = this.getPeople(people);
    this.distanceInKm = distanceInKm;
    this.priority = this.getPriority(priority);
    this.status = this.getStatus(status);
  }

  getPeople(people) {
    let peopleFormat = [];

    if (typeof people === 'string') {
      peopleFormat = [people];
    }

    return peopleFormat;
  }

  getPriorityMap() {
    return {
      [LOW_PRIORITY]: 'low',
      [MEDIUM_PRIORITY]: 'medium',
      [HIGH_PRIORITY]: 'high'
    };
  }

  getStatusMap() {
    return {
      [PENDING_STATUS]: 'pending',
      [ACTIVE_STATUS]: 'active',
      [FINISHED_STATUS]: 'finished'
    };
  }

  getPriority(priority) {
    const priorityMeaning = this.getPriorityMap()[priority];

    if (!priorityMeaning) {
      return this.getPriorityMap()[LOW_PRIORITY];
    }

    return priorityMeaning;
  }

  getStatus(status) {
    const statusMeaning = this.getStatusMap()[status];

    if (!statusMeaning) {
      return this.getStatusMap()[PENDING_STATUS];
    }

    return statusMeaning;
  }
}