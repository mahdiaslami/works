import type { IssueRepository as IIssueRepository } from '../contracts/issue-repository.ts';
import { GitLab } from '../support/gitlab.js';
import { Issue } from './issue.ts';
import { IssueCollection } from './issue-collection.ts';

export class IssueRepository implements IIssueRepository {
  private gitlab: GitLab;

  constructor(gitlab: GitLab) {
    this.gitlab = gitlab;
  }

  async issuesCreatedByMe(): Promise<IssueCollection> {
    const created = await Promise.all([
      this.gitlab.issues({ scope: 'created_by_me', state: 'opened', per_page: 100, order_by: 'created_at', sort: 'desc' }),
      this.gitlab.issues({ scope: 'created_by_me', state: 'closed', per_page: 100, order_by: 'updated_at', sort: 'desc' }),
    ]);
    const items = created.flatMap((i) => i).map(i => new Issue(i));
    return new IssueCollection(items);
  }

  async issuesAssignedToMe(): Promise<IssueCollection> {
    const assigned = await Promise.all([
      this.gitlab.issues({ scope: 'assigned_to_me', state: 'opened', per_page: 100, order_by: 'created_at', sort: 'desc' }),
      this.gitlab.issues({ scope: 'assigned_to_me', state: 'closed', per_page: 100, order_by: 'updated_at', sort: 'desc' }),
    ]);
    const items = assigned.flatMap((i) => i).map(i => new Issue(i));
    return new IssueCollection(items);
  }

  async issuesReactedByPencil(): Promise<IssueCollection> {
    const reacted = await this.gitlab.issues({
      my_reaction_emoji: 'pencil', per_page: 100, order_by: 'updated_at', sort: 'desc'
    });
    const items = (reacted || []).map(i => new Issue(i));
    return new IssueCollection(items);
  }

  async issuesReactedByWhiteCheckMark(): Promise<Set<number>> {
    const reacted = await this.gitlab.issues({
      my_reaction_emoji: 'white_check_mark', per_page: 100, order_by: 'updated_at', sort: 'desc'
    });
    const result = new Set<number>();
    (reacted || []).forEach((i) => result.add(i.id));
    return result
  }
}