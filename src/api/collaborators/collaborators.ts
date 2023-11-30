import { Http, HttpInstance } from '@/helpers/http';

export class CollaboratorsAPI {
  private http: HttpInstance;

  constructor() {
    this.http = new Http('collaborators').create();
  }
}