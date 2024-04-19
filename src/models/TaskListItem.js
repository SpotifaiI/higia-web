export class TaskListItem {
  /**
   * @type {string}
   */
  title;
  /**
   * @type {string}
   */
  person;
  /**
   * @type {number}
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