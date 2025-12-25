import type { Category } from '../categories/category';

export interface CategoryRepository {
  all(): Promise<Category[]>;
}