import type { WorkRepository as IWorkRepository } from '../contracts/work-repository';
import { issues, me } from '../support/seeder';
import { Work } from '../works/work';
import { WorkCollection } from '../works/work-collection';

export class WorkRepository implements IWorkRepository {
  constructor() { }

  async issuesCreatedByMe(): Promise<WorkCollection> {
    const items = issues.map((i) => new Work(i))
      .filter((w) => w.author === me);

    return new WorkCollection(items);
  }

  async issuesAssignedToMe(): Promise<WorkCollection> {
    const items = issues.map((i) => new Work(i))
      .filter((w) => w.assignee === me);

    return new WorkCollection(items);
  }

  async issuesReactedByPencil(): Promise<WorkCollection> {
    const items = issues.map((i) => new Work(i))
      .filter((w) => w.assignee !== me && w.author !== me);

    return new WorkCollection(items);
  }

  async issuesReactedByWhiteCheckMark(): Promise<Set<number>> {
    return new Set<number>([1000])
  }
}
