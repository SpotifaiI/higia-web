import { Http, HttpInstance } from '@/helpers/http';

import { DbTask, Task } from './tasks.model';

export class TasksAPI {
  private http: HttpInstance;

  constructor() {
    this.http = new Http('tasks').create();
  }

  async getTasks(): Promise<Task[]> {
    const { data } = await this.http.get<DbTask[]>('/');

    return data.map(task => new Task(task));
  }
}