import { ISubCategoriesRepository } from "@modules/categories/repositories/ISubCategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSubCategoriesUseCase {
  constructor(
    @inject("SubCategoriesRepository")
    private subCategoriesRepository: ISubCategoriesRepository
  ) { }
  async execute(idCategory: number) {
    return this.subCategoriesRepository.findSubCategoriesByCategory(idCategory)
  }
}

export { ListSubCategoriesUseCase }