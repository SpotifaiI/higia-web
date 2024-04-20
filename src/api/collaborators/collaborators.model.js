export class Collaborator {
  /**
   * @type {string}
   */
  id;
  /**
   * @type {string}
   */
  name;
  /**
   * @type {string}
   */
  email;
  /**
   * @type {Date}
   */
  birthday;
  /**
   * @type {string}
   */
  phoneNumber;

  /**
   * @param {{
   *    id: string,
   *    name: string,
   *    email: string,
   *    birthday: string,
   *    phoneNumber: string
   * }} props
   */
  constructor(props) {
    const {
      id,
      birthday,
      phoneNumber,
      email,
      name
    } = props;

    this.id = id;
    this.email = email;
    this.birthday = new Date(birthday.replaceAll('/', '-'));
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}