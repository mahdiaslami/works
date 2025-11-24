import { GitLab } from '../support/gitlab.js';
import { Work } from './work';

export class WorkRepository {
  private gitlab: GitLab;

  constructor(gitlab: GitLab) {
    this.gitlab = gitlab;
  }

  /**
   * Retrieve issues created by the current user and issues assigned to them.
   * Results are deduplicated by webUrl.
   */
  async get(): Promise<Work[]> {
    const [created, assigned] = await Promise.all([
      this.gitlab.issues({ scope: 'created_by_me' }),
      this.gitlab.issues({ scope: 'assigned_to_me' })
    ]);

    const combined = [...(created || []), ...(assigned || [])];

    const map = new Map<string, Work>();
    for (const item of combined) {
      if (!item) continue;
      const key = item.webUrl;
      if (!map.has(key)) map.set(key, new Work(item));
    }

    return Array.from(map.values());
  }
}