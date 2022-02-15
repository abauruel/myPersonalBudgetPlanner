import { SubCategory } from "../infra/typeorm/entities/SubCategory";

type CreateSubCategoryInput = {
  name: string
  idCategory: number
}

interface ISubCategoriesRepository {
  findByName(name: string): Promise<SubCategory[]>
  findSubCategoriesByCategory(idCategory: number): Promise<SubCategory[]>
  create(subCategory: CreateSubCategoryInput): Promise<void>
}

export { ISubCategoriesRepository }