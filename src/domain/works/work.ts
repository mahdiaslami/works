import type { Issue, MergeRequest, User } from '../../types/gitlab';

export class Work implements Issue, MergeRequest {
  private _target: Issue | MergeRequest;

  constructor(target: Issue | MergeRequest) {
    this._target = target;
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

  get target(): Issue | MergeRequest {
    return this._target;
  }
}