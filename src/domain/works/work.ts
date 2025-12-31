import type { Issue, IssueState, MergeRequest, MergeRequestState, State, User } from '../../types/gitlab';
import type { Category } from '../categories/category';
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

  get state(): State {
    return this._target.state
  }

  get selfTimeEstimate(): number {
    return this._target.timeEstimate;
  }

  get selfTimeSpent(): number {
    return this._target.totalTimeSpent;
  }

  get timeEstimate(): number {
    return this.children.getTotalTimeEstimate();
  }

  get totalTimeSpent(): number {
    return this.selfTimeSpent +
      this.children.getTotalTimeSpend();
  }

  get target(): Issue | MergeRequest {
    return this._target;
  }

  get effectiveState(): State {
    return this.children.getEffectiveState() !== 'opened' ? this.state : 'opened'
  }

  belongsTo(category: Category): boolean {
    return category.slugs.some(slug => this.webUrl.includes(slug));
  }

  isCompleted(completed: Set<number>) {
    return this.description.includes('[Done]') || completed.has(this.id)
  }
}