import { IssueRepository } from '../issues/issue-repository';
import { IssueCollection } from '../issues/issue-collection';
import { CategoryRepository } from '../categories/category-repository';
import { Category } from '../categories/category';

export class IssueService {
  private issueRepo: IssueRepository;
  private categoryRepo: CategoryRepository;

  constructor(issueRepo: IssueRepository, categoryRepo: CategoryRepository) {
    this.issueRepo = issueRepo;
    this.categoryRepo = categoryRepo;
  }

  /**
   * Retrieve issues created by the current user and issues assigned to them.
   * Results are deduplicated by webUrl.
   */
  async issues(): Promise<IssueCollection> {
    const [created, assigned, bookmarked, completed] = await Promise.all([
      this.issueRepo.issuesCreatedByMe(),
      this.issueRepo.issuesAssignedToMe(),
      this.issueRepo.issuesReactedByPencil(),
      this.issueRepo.issuesReactedByWhiteCheckMark(),
    ]);

    const merged = bookmarked.merge(created.merge(assigned));
    const tree = merged.buildTree()
    return tree.getOpened().withoutCompleted(completed);
  }

  /**
   * Retrieve all categories and populate their issues property with matching issues.
   * Creates an "Other" category for issues that don't belong to any defined category.
   */
  async categories(): Promise<Category[]> {
    const issues = await this.issues();
    const categories = await this.categoryRepo.all();

    const otherCategory = new Category(0, 'Other', []);

    for (const issue of issues.items) {
      const hasCategory = categories.some((category) => {
        const isBelongs = issue.belongsTo(category)
        if (isBelongs) category.issues.add(issue)
        return isBelongs
      })

      if (!hasCategory) otherCategory.issues.add(issue)
    }

    return [...categories, otherCategory];
  }
}