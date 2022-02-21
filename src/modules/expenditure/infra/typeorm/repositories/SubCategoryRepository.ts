import { getRepository, Repository } from 'typeorm'
import { ISubCategoriesRepository } from '@modules/expenditure/repositories/ISubCategoriesRepository';
import { SubCategory } from '../entities/SubCategory';

type CreateSubCategoryProps = {
  idcategory: number
  name: string
}

class SubCategoryRepository implements ISubCategoriesRepository {
  private readonly repository: Repository<SubCategory>

  constructor() {
    this.repository = getRepository(SubCategory)
  }

  async findByName(name: string): Promise<SubCategory[]> {
    const subCategory = await this.repository.find({
      where: {
        name
      }
    })

    return subCategory
  }

  async findSubCategoriesByCategory(idCategory: number): Promise<SubCategory[]> {
    const subcategories = await this.repository.find({
      where: {
        id: idCategory
      }
    })
    return subcategories
  }

  async create({ idcategory, name }: CreateSubCategoryProps): Promise<SubCategory> {
    const subcategory = this.repository.create({ idcategory, name })
    return this.repository.save(subcategory)

  }


}


export { SubCategoryRepository }