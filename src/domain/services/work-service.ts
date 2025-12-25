import { WorkRepository } from '../works/work-repository';
import { Work } from '../works/work';
import { WorkCollection } from '../works/work-collection';
import { CategoryRepository } from '../categories/category-repository';
import { Category } from '../categories/category';

export class WorkService {
  private workRepo: WorkRepository;
  private categoryRepo: CategoryRepository;

  constructor(workRepo: WorkRepository, categoryRepo: CategoryRepository) {
    this.workRepo = workRepo;
    this.categoryRepo = categoryRepo;
  }

  /**
   * Retrieve issues created by the current user and issues assigned to them.
   * Results are deduplicated by webUrl.
   */
  async get(): Promise<WorkCollection> {
    const [created, assigned, bookmarked] = await Promise.all([
      this.workRepo.issuesCreatedByMe(),
      this.workRepo.issuesAssignedToMe(),
      this.workRepo.issuesReactedByPencil(),
    ]);

    const merged = bookmarked.merge(created.merge(assigned));
    const tree = merged.buildTree()
    return tree.getOpened();
  }

  /**
   * Retrieve all categories and populate their works property with matching works.
   * Creates an "Other" category for works that don't belong to any defined category.
   */
  async categories(): Promise<Category[]> {
    const works = await this.get();
    const categories = await this.categoryRepo.all();

    const otherCategory = new Category(0, 'Other', []);

    for (const work of works.items) {
      const hasCategory = categories.some((category) => {
        const isBelongs = work.belongsTo(category)
        if (isBelongs) category.works.add(work)
        return isBelongs
      })

      if (!hasCategory) otherCategory.works.add(work)
    }

    return [...categories, otherCategory];
  }
}