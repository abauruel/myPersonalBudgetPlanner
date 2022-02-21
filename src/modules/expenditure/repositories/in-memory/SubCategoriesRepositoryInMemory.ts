import { SubCategory } from "@modules/expenditure/infra/typeorm/entities/SubCategory";
import { ISubCategoriesRepository, CreateSubCategoryInput } from "../ISubCategoriesRepository";



class SubCategoriesRepositoryInMemory implements ISubCategoriesRepository {
  findByName(name: string): Promise<SubCategory[]> {
    throw new Error("Method not implemented.");
  }
  private subCategories: SubCategory[] = []

  async findSubCategoriesByCategory(idCategory: number): Promise<SubCategory[]> {
    const subcategories = this.subCategories.filter(s => s.idcategory == idCategory)
    return subcategories
  }


  async create(subCategory: CreateSubCategoryInput): Promise<SubCategory> {
    const subcategory: SubCategory = {
      ...subCategory
    }
    this.subCategories.push(subcategory)
    return subcategory
  }


}

export { SubCategoriesRepositoryInMemory }