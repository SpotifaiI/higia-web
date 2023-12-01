export type DbCollaborator = {
  id: string;
  name: string;
  email: string;
  birthday: string;
  phoneNumber: string;
}

export class Collaborator {
  public id: string;
  public name: string;
  public email: string;
  public birthday: Date;
  public phoneNumber: string;

  constructor({
    id,
    email,
    birthday,
    name,
    phoneNumber
  }: DbCollaborator) {
    this.id = id;
    this.email = email;
    this.birthday = new Date(birthday.replaceAll('/', '-'));
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}