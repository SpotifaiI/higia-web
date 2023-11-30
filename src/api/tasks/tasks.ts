import { Http, HttpInstance } from '@/helpers/http';

import { taskStatus } from './tasks.constants';
import { DbTask, OrderedTasks, Task } from './tasks.model';

export class TasksAPI {
  private http: HttpInstance;

  constructor() {
    this.http = new Http('tasks').create();
  }

  async getTasks(): Promise<Task[]> {
    const { data } = await this.http.get<DbTask[]>('/');

    return data.map(task => new Task(task));
  }

  async getOrderedTasks(): Promise<OrderedTasks> {
    const tasksList = await this.getTasks();

    const pending: Task[] = [];
    const active: Task[] = [];
    const concluded: Task[] = [];

    tasksList.forEach(task => {
      switch (task.status) {
        case taskStatus.active:
          active.push(task);
          break;

        case taskStatus.pending:
          pending.push(task);
          break;

        case taskStatus.concluded:
          concluded.push(task);
          break;
      }
    });

    return {
      pending,
      active,
      concluded
    };
  }
}