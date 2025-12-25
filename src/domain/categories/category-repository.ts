import type { CategoryRepository as ICategoryRepository } from '../contracts/category-repository';
import { Category } from './category';

export class CategoryRepository implements ICategoryRepository {
  async all(): Promise<Category[]> {
    const categoriesData = localStorage.getItem('/v1/categories');

    if (!categoriesData) {
      return [];
    }

    try {
      const parsedData = JSON.parse(categoriesData);
      return parsedData.map((item: any) => new Category(item.id, item.name, item.slugs));
    } catch (error) {
      console.error('Error parsing categories from localStorage:', error);
      return [];
    }
  }
}