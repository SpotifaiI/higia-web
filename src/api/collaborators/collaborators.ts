import { Http, HttpInstance } from '@/helpers/http';
import { Collaborator, DbCollaborator } from './collaborators.model';

export class CollaboratorsAPI {
  private http: HttpInstance;

  constructor() {
    this.http = new Http('collaborators').create();
  }

  async getCollaborators(): Promise<Collaborator[]> {
    const { data } = await this.http.get<DbCollaborator[]>('/');
    const collaborators = data.map(({
      id,
      name,
      email,
      birthday,
      phoneNumber
    }) => new Collaborator({
      id,
      birthday,
      email,
      name,
      phoneNumber
    }));

    return collaborators;
  }

  async collaboratorLogin(email: string): Promise<Collaborator | null> {
    const collaborators = await this.getCollaborators();
    const filteredCollaborators = collaborators.filter(
      collaborator => collaborator.email == email
    );

    let collaborator = null;

    if (filteredCollaborators.length > 0) {
      collaborator = filteredCollaborators[0];
    }

    return collaborator;
  }
}