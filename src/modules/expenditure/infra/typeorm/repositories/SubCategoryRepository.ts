import { getRepository, Repository } from 'typeorm'
import { ISubCategoriesRepository } from '@modules/expenditure/repositories/ISubCategoriesRepository';
import { SubCategory } from '../entities/SubCategory';

type CreateSubCategoryProps = {
  idCategory: number
  name: string
}

class SubCategoryRepository implements ISubCategoriesRepository {
  private repository: Repository<SubCategory>

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
        idcategory: idCategory
      }
    })
    return subcategories
  }

  async create({ idCategory, name }: CreateSubCategoryProps): Promise<void> {
    const subcategory = this.repository.create({ idcategory: idCategory, name })
    await this.repository.save(subcategory)

  }


}


export { SubCategoryRepository }