import type { IssueRepository as IIssueRepository } from '../contracts/issue-repository.ts';
import { GitLab } from '../support/gitlab.js';
import { Issue } from './issue.ts';
import { IssueCollection } from './issue-collection.ts';

export class IssueRepository implements IIssueRepository {
  private gitlab: GitLab;

  constructor(gitlab: GitLab) {
    this.gitlab = gitlab;
  }

  /**
   * Retrieve issues created by the current user as a IssueCollection.
   */
  async issuesCreatedByMe(): Promise<IssueCollection> {
    const created = await this.gitlab.issues({
      scope: 'created_by_me', per_page: 100, order_by: 'updated_at', sort: 'desc'
    });
    const items = (created || []).map(i => new Issue(i));
    return new IssueCollection(items);
  }

  /**
   * Retrieve issues assigned to the current user as a IssueCollection.
   */
  async issuesAssignedToMe(): Promise<IssueCollection> {
    const assigned = await this.gitlab.issues({
      scope: 'assigned_to_me', per_page: 100, order_by: 'updated_at', sort: 'desc'
    });
    const items = (assigned || []).map(i => new Issue(i));
    return new IssueCollection(items);
  }

  /**
   * Retrieve issues that current user reaction was pencil.
   */
  async issuesReactedByPencil(): Promise<IssueCollection> {
    const reacted = await this.gitlab.issues({
      my_reaction_emoji: 'pencil', per_page: 100, order_by: 'updated_at', sort: 'desc'
    });
    const items = (reacted || []).map(i => new Issue(i));
    return new IssueCollection(items);
  }

  /**
   * Retrieve id of issues that current user reaction was was white_check_mark.
   */
  async issuesReactedByWhiteCheckMark(): Promise<Set<number>> {
    const reacted = await this.gitlab.issues({
      my_reaction_emoji: 'white_check_mark', per_page: 100, order_by: 'updated_at', sort: 'desc'
    });
    const result = new Set<number>();
    (reacted || []).forEach((i) => result.add(i.id));
    return result
  }
}