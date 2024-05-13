export class TaskListItem {
  static LOW_PRIORITY = 1;
  static MEDIUM_PRIORITY = 2;
  static HIGH_PRIORITY = 3;
  static LOW_PRIORITY_TX = 'low';
  static MEDIUM_PRIORITY_TX = 'medium';
  static HIGH_PRIORITY_TX = 'high';
  static PENDING_STATUS = 1;
  static ACTIVE_STATUS = 2;
  static FINISHED_STATUS = 3;
  static PENDING_STATUS_TX = 'pending';
  static ACTIVE_STATUS_TX = 'active';
  static FINISHED_STATUS_TX = 'finished';

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
    priority = TaskListItem.LOW_PRIORITY,
    status = TaskListItem.PENDING_STATUS
  ) {
    this.id = id;
    this.title = title;
    this.person = this.getPeople(people);
    this.distanceInKm = distanceInKm;
    this.priority = this.getPriority(priority);
    this.status = this.getStatus(status);
  }

  getPeople(people) {
    let peopleFormat = people;

    if (typeof people === 'string') {
      peopleFormat = [people];
    }

    return peopleFormat;
  }

  static getPriorityMap() {
    return {
      [TaskListItem.LOW_PRIORITY]: TaskListItem.LOW_PRIORITY_TX,
      [TaskListItem.MEDIUM_PRIORITY]: TaskListItem.MEDIUM_PRIORITY_TX,
      [TaskListItem.HIGH_PRIORITY]: TaskListItem.HIGH_PRIORITY_TX
    };
  }

  static getStatusMap() {
    return {
      [TaskListItem.PENDING_STATUS]: TaskListItem.PENDING_STATUS_TX,
      [TaskListItem.ACTIVE_STATUS]: TaskListItem.ACTIVE_STATUS_TX,
      [TaskListItem.FINISHED_STATUS]: TaskListItem.FINISHED_STATUS_TX
    };
  }

  getPriority(priority) {
    const priorityMeaning = TaskListItem.getPriorityMap()[priority];

    if (!priorityMeaning) {
      return TaskListItem.getPriorityMap()[TaskListItem.LOW_PRIORITY];
    }

    return priorityMeaning;
  }

  getStatus(status) {
    const statusMeaning = TaskListItem.getStatusMap()[status];

    if (!statusMeaning) {
      return TaskListItem.getStatusMap()[TaskListItem.PENDING_STATUS];
    }

    return statusMeaning;
  }
}