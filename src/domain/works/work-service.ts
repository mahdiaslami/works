import { WorkRepository } from './work-repository';
import { WorkCollection } from './work-collection';
import { Work } from './work';

export class WorkService {
  private repo: WorkRepository;

  constructor(repo: WorkRepository) {
    this.repo = repo;
  }

  /**
   * Retrieve issues created by the current user and issues assigned to them.
   * Results are deduplicated by webUrl.
   */
  async get(): Promise<Work[]> {
    const [created, assigned] = await Promise.all([
      this.repo.issuesCreatedByMe(),
      this.repo.issuesAssignedToMe()
    ]);

    const merged = created.merge(assigned);
    return merged.toArray();
  }
}