export class Route {
  /**
   * @var {string} path
   */
  path;
  /**
   * @var {Icon} Icon
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