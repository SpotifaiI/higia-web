import { Http, HttpInstance } from '@/helpers/http';
import { Collaborator, DbCollaborator } from './collaborators.model';
import Colaborators from '@/app/colaborators/page';
import { v4 as uuidv4 } from 'uuid'

export class CollaboratorsAPI {
  private http: HttpInstance;

  constructor() {
    this.http = new Http('collaborators').create();
  }

  async getCollaborators(): Promise<Collaborator[]> {
    const { data } = await this.http.get<DbCollaborator[]>('/');
    console.log(data);
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

  async createColaborators(collaborator:DbCollaborator){

    if (!collaborator.id) {
      collaborator.id = uuidv4();
    }

    const response = await this.http.post("/",collaborator);
    console.log(response);
    return response;
  }
}