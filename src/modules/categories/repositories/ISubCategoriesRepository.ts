import { SubCategory } from "../infra/typeorm/entities/SubCategory";

interface ISubCategoriesRepository {
  findSubCategoriesByCategory(idCategory: number): Promise<SubCategory[]>
  create(subCategory: SubCategory): Promise<void>
}

export { ISubCategoriesRepository }