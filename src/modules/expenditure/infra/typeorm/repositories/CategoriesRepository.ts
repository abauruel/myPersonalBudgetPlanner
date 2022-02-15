import { getRepository, Repository } from 'typeorm'
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";
import { Category } from "@modules/categories/infra/typeorm/entities/Category";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  async findAll(): Promise<Category[]> {
    return this.repository.find()
  }

  async create(name: string): Promise<void> {

    const category = this.repository.create({
      name
    })
    await this.repository.save(category)

  }
}


export { CategoriesRepository }