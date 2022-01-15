import { getRepository, Repository } from 'typeorm'
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";
import { Category } from "@modules/categories/infra/typeorm/entities/Category";
import { ISubCategoriesRepository } from '@modules/categories/repositories/ISubCategoriesRepository';
import { SubCategory } from '../entities/SubCategory';

class SubCategoryRepository implements ISubCategoriesRepository {
  private repository: Repository<SubCategory>

  constructor() {
    this.repository = getRepository(SubCategory)
  }

  async findSubCategoriesByCategory(idCategory: number): Promise<SubCategory[]> {
    const subcategories = await this.repository.find({
      where: {
        idcategory: idCategory
      }
    })
    return subcategories
  }

  async create(subCategory: SubCategory): Promise<void> {
    const subcategory = this.repository.create(subCategory)
    await this.repository.save(subcategory)

  }


}


export { SubCategoryRepository }