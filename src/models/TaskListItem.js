export class TaskListItem {
  /**
   * @var {string}
   */
  title;
  /**
   * @var {string}
   */
  person;
  /**
   * @var {number}
   */
  distanceInKm;

  /**
   * @param {string} title
   * @param {string} person
   * @param {number} distanceInKm
   * @private
   */
  constructor(title, person, distanceInKm) {
    this.title = title;
    this.person = person;
    this.distanceInKm = distanceInKm;
  }
}