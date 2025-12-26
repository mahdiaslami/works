// @ts-check
import axios from 'axios';

/**
 * @typedef {import('../../types/gitlab').Issue} Issue
 * @typedef {import('../../types/gitlab').MergeRequest} MergeRequest
 * @typedef {import('../../types/gitlab').Todo} Todo
 * @typedef {import('../../types/gitlab').User} User
 * @typedef {import('../../types/gitlab').IssueQueryParam} IssueQueryParam
 * @typedef {import('../../types/gitlab').MergeRequestQueryParam} MergeRequestQueryParam
 * @typedef {import('../../types/gitlab').TodoQueryParam} TodoQueryParam
 */

/**
 * Lightweight GitLab client used by the app.
 */
export class GitLab {
  /**
   * @param {string} baseUrl
   * @param {string} token
   */
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  /**
   * @returns {import('axios').AxiosInstance}
   */
  _axios() {
    return axios.create({
      baseURL: this._baseUrl,
      headers: {
        Authorization: `Bearer ${this._token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  /**
   * Normalize a raw user object from GitLab to our User type.
   * @param {!any} user
   * @returns {User}
   */
  _mapUser(user) {
    return {
      id: user.id,
      username: user.username ?? user.userName ?? user.login,
      name: user.name,
      avatarUrl: user.avatar_url ?? user.avatarUrl,
      webUrl: user.web_url ?? user.webUrl
    };
  }

  /**
   * Normalize an issue or merge request payload to our simple shape.
   * Ensures author is non-null to satisfy typedefs.
   * @param {!any} item
   * @returns {Issue | MergeRequest}
   */
  _mapIssueOrMr(item) {
    const author = this._mapUser(item.author);
    const assignee = item.assignees.length > 0 ? this._mapUser(item.assignees[0]) : null;
    return {
      id: item.id,
      iid: item.iid,
      title: item?.title,
      author,
      assignee,
      description: item.description,
      state: item.state,
      webUrl: item.web_url,
    };
  }

  /**
   * Retrieve issues from GitLab.
   * @param {IssueQueryParam} [params]
   * @returns {Promise<(Issue)[]>}
   */
  async issues(params = {}) {
    const res = await this._axios().get('/issues', { params });
    if (!Array.isArray(res.data)) return [];
    const list = /** @type {any[]} */ (res.data);
    return list.map((it) => this._mapIssueOrMr(it));
  }

  /**
   * Retrieve merge requests from GitLab.
   * @param {MergeRequestQueryParam} [params]
   * @returns {Promise<(MergeRequest)[]>}
   */
  async mergeRequests(params = {}) {
    const res = await this._axios().get('/merge_requests', { params });
    if (!Array.isArray(res.data)) return [];
    const list = /** @type {any[]} */ (res.data);
    return list.map((it) => this._mapIssueOrMr(it));
  }

  /**
   * Retrieve todos from GitLab and map their targets.
   * @param {TodoQueryParam} [params]
   * @returns {Promise<Todo[]>}
   */
  async todos(params = {}) {
    const res = await this._axios().get('/todos', { params });
    if (!Array.isArray(res.data)) return [];
    const list = /** @type {any[]} */ (res.data);
    return list.map((todo) => {
      /** @type {Todo} */
      const mapped = {
        target_type: todo.target_type,
        target: undefined
      };
      const target = todo.target ?? todo.target_details ?? todo;
      if (!target) return mapped;
      mapped.target = this._mapIssueOrMr(target);
      return mapped;
    });
  }
}