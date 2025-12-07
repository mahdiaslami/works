import type { WorkRepository as IWorkRepository } from '../contracts/work-repository';
import { GitLab } from '../support/gitlab.js';
import { Work } from './work';
import { WorkCollection } from './work-collection';

export class WorkRepository implements IWorkRepository {
  private gitlab: GitLab;

  constructor(gitlab: GitLab) {
    this.gitlab = gitlab;
  }

  /**
   * Retrieve issues created by the current user as a WorkCollection.
   */
  async issuesCreatedByMe(): Promise<WorkCollection> {
    const created = await this.gitlab.issues({ scope: 'created_by_me' });
    const items = (created || []).filter(Boolean).map(i => new Work(i));
    return new WorkCollection(items);
  }

  /**
   * Retrieve issues assigned to the current user as a WorkCollection.
   */
  async issuesAssignedToMe(): Promise<WorkCollection> {
    const assigned = await this.gitlab.issues({ scope: 'assigned_to_me' });
    const items = (assigned || []).filter(Boolean).map(i => new Work(i));
    return new WorkCollection(items);
  }
}