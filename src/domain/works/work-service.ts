import { WorkRepository } from './work-repository';
import { Work } from './work';
import type { WorkCollection } from './work-collection';

export class WorkService {
  private repo: WorkRepository;

  constructor(repo: WorkRepository) {
    this.repo = repo;
  }

  /**
   * Retrieve issues created by the current user and issues assigned to them.
   * Results are deduplicated by webUrl.
   */
  async get(): Promise<WorkCollection> {
    const [created, assigned, bookmarked] = await Promise.all([
      this.repo.issuesCreatedByMe(),
      this.repo.issuesAssignedToMe(),
      this.repo.issuesReactedByPencil(),
    ]);

    const merged = bookmarked.merge(created.merge(assigned));
    const tree = merged.buildTree()
    return tree.getOpened();
  }
}