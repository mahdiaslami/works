import type { CategoryRepository as ICategoryRepository } from '../contracts/category-repository';
import { Category } from '../categories/category';
import { categories } from '../support/seeder'

export class CategoryRepository implements ICategoryRepository {
  async all(): Promise<Category[]> {
    try {
      const parsedData = categories;
      return parsedData.map((item: any) => new Category(item.id, item.name, item.slugs));
    } catch (error) {
      console.error('Error parsing categories from localStorage:', error);
      return [];
    }
  }
}
