export class Route {
  /**
   * @type {string} path
   */
  path;
  /**
   * @type {Icon} Icon
   */
  Icon;

  /**
   * @param {string} path
   * @param {import('react-feather').Icon} Icon
   */
  constructor(path, Icon) {
    this.path = path;
    this.Icon = Icon;
  }
}