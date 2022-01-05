import { Category } from "@modules/categories/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  private categories: Category[] = []

  async findAll(): Promise<Category[]> {
    return this.categories
  }

  async create(name: string): Promise<void> {
    const category = new Category()
    Object.assign(category, {
      name
    })

    this.categories.push(category)
  }
}

export { CategoriesRepositoryInMemory }