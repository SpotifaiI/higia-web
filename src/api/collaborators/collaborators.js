import { v4 as uuidv4 } from 'uuid';

import { Http } from '../../helpers/http';
import { Collaborator } from './collaborators.model';

export class CollaboratorsAPI {
  /**
   * @type {import('axios').AxiosInstance}
   */
  http;

  constructor() {
    this.http = new Http('collaborators').create();
  }

  /**
   * @returns {Promise<Collaborator[]>}
   */
  async getCollaborators() {
    const { data } = await this.http.get('/');

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

  /**
   * @param {string} email
   * @returns {Promise<Collaborator|null>}
   */
  async collaboratorLogin(email) {
    const collaborators = await this.getCollaborators();
    const filteredCollaborators = collaborators.filter(
      collaborator => collaborator.email === email
    );

    let collaborator = null;

    if (filteredCollaborators.length > 0) {
      collaborator = filteredCollaborators[0];
    }

    return collaborator;
  }

  /**
   * @param {{
   *    id: string,
   *    name: string,
   *    email: string,
   *    birthday: string,
   *    phoneNumber: string
   * }} collaborator
   *
   * @returns {Promise<AxiosResponse<Collaborator>>}
   */
  async createColaborators(collaborator){

    if (!collaborator.id) {
      collaborator.id = uuidv4();
    }

    return await this.http.post("/",collaborator);
  }
}