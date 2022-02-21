import { getRepository, Repository } from 'typeorm'
import { ICategoriesRepository } from "@modules/expenditure/repositories/ICategoriesRepository";
import { Category } from "@modules/expenditure/infra/typeorm/entities/Category";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }
  async findById(id: number): Promise<Category> {
    return this.repository.findOne({
      where: {
        id
      }
    })
  }

  async findAll(): Promise<Category[]> {
    return this.repository.find()
  }

  async create(name: string): Promise<Category> {

    const category = this.repository.create({
      name
    })
    return await this.repository.save(category)

  }
}


export { CategoriesRepository }