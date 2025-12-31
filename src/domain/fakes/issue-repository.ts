import type { IssueRepository as IIssueRepository } from '../contracts/issue-repository';
import { issues, me } from '../support/seeder';
import { Issue } from '../issues/issue';
import { IssueCollection } from '../issues/issue-collection';

export class IssueRepository implements IIssueRepository {
  constructor() { }

  async issuesCreatedByMe(): Promise<IssueCollection> {
    const items = issues.map((i) => new Issue(i))
      .filter((w) => w.author === me);

    return new IssueCollection(items);
  }

  async issuesAssignedToMe(): Promise<IssueCollection> {
    const items = issues.map((i) => new Issue(i))
      .filter((w) => w.assignee === me);

    return new IssueCollection(items);
  }

  async issuesReactedByPencil(): Promise<IssueCollection> {
    const items = issues.map((i) => new Issue(i))
      .filter((w) => w.assignee !== me && w.author !== me);

    return new IssueCollection(items);
  }

  async issuesReactedByWhiteCheckMark(): Promise<Set<number>> {
    return new Set<number>([1000])
  }
}
