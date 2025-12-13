import type { Issue, MergeRequest, User } from '../../types/gitlab';
import { WorkCollection } from './work-collection';

export class Work implements Issue, MergeRequest {
  _target: Issue | MergeRequest;
  children: WorkCollection;
  parents: WorkCollection;

  constructor(target: Issue | MergeRequest) {
    this._target = target;
    this.children = new WorkCollection();
    this.parents = new WorkCollection();
  }

  get id(): number {
    return this._target.id;
  }

  get iid(): number {
    return this._target.iid;
  }

  get title(): string {
    return this._target.title;
  }

  get author(): User {
    return this._target.author;
  }

  get assignee(): User | null {
    return this._target.assignee;
  }

  get webUrl(): string {
    return this._target.webUrl;
  }

  get description(): string {
    return this._target.description;
  }

  get target(): Issue | MergeRequest {
    return this._target;
  }
}