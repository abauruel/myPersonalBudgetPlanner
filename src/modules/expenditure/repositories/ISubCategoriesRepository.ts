import { SubCategory } from "../infra/typeorm/entities/SubCategory";

export type CreateSubCategoryInput = {
  name: string
  idcategory: number
}

interface ISubCategoriesRepository {
  findByName(name: string): Promise<SubCategory[]>
  findSubCategoriesByCategory(idCategory: number): Promise<SubCategory[]>
  create(subCategory: CreateSubCategoryInput): Promise<SubCategory>
}

export { ISubCategoriesRepository }