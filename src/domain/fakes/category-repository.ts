import type { CategoryRepository as ICategoryRepository } from '../contracts/category-repository';
import { Category } from '../categories/category';

export class CategoryRepository implements ICategoryRepository {
  async all(): Promise<Category[]> {
    try {
      const parsedData = categoriesData;
      return parsedData.map((item: any) => new Category(item.id, item.name, item.slugs));
    } catch (error) {
      console.error('Error parsing categories from localStorage:', error);
      return [];
    }
  }
}

const categoriesData = [
  {
    id: 1,
    name: 'First',
    slugs: [
      'first-group'
    ]
  },
  {
    id: 2,
    name: 'Second',
    slugs: [
      'second-project'
    ]
  },
]