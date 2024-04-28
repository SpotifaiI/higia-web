import axios from 'axios';

export class Http {
  /**
   * @type {string}
   */
  domain;
  /**
   * @type {number}
   */
  port;
  /**
   * @type {string}
   */
  baseUrl;

  /**
   * @param {string} resource
   */
  constructor(resource) {
    this.port = 3000;

    this.domain = 'http://localhost';

    this.baseUrl = `${this.domain}:${this.port}/api`;

    if (resource) {
      this.baseUrl = `${this.baseUrl}/${resource}`;
    }
  }

  /**
   * @returns {axios.AxiosInstance}
   */
  create() {
    return axios.create({
      baseURL: this.baseUrl,
      withCredentials: false
    });
  }
}