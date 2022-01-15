import { SubCategory } from "@modules/categories/infra/typeorm/entities/SubCategory";
import { ISubCategoriesRepository } from "../ISubCategoriesRepository";

class SubCategoriesRepositoryInMemory implements ISubCategoriesRepository {
  private subCategories: SubCategory[] = []

  async findSubCategoriesByCategory(idCategory: number): Promise<SubCategory[]> {
    const subcategories = this.subCategories.filter(s => s.idcategory == idCategory)
    return subcategories
  }


  async create(subCategory: SubCategory): Promise<void> {
    this.subCategories.push(subCategory)

  }


}

export { SubCategoriesRepositoryInMemory }