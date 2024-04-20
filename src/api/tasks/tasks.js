import { Http } from '../../helpers/http.js';
import { taskStatus } from './tasks.constants.js';
import { Task } from './tasks.model.js';

export class TasksAPI {
  /**
   * @type {import('axios').AxiosInstance}
   */
  http;

  constructor() {
    this.http = new Http('tasks').create();
  }

  /**
   * @returns {Promise<Task[]>}
   */
  async getTasks() {
    const { data } = await this.http.get('/');

    return data.map(task => new Task(task));
  }

  /**
   * @returns {Promise<{concluded: Task[], pending: Task[], active: Task[]}>}
   */
  async getOrderedTasks() {
    const tasksList = await this.getTasks();

    /**
     * @type {Task[]}
     */
    const pending = [];
    /**
     * @type {Task[]}
     */
    const active = [];
    /**
     * @type {Task[]}
     */
    const concluded = [];

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