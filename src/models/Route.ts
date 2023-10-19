import { Icon } from 'react-feather';

export class Route {
  path: string;
  Icon: Icon;

  constructor(path: string, Icon: Icon) {
    this.path = path;
    this.Icon = Icon;
  }
}