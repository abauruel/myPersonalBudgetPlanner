import { ISubCategoriesRepository } from "@modules/expenditure/repositories/ISubCategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSubCategoriesUseCase {
  constructor(
    @inject("SubCategoriesRepository")
    private subCategoriesRepository: ISubCategoriesRepository
  ) { }
  async execute(idCategory: number) {
    const subCategories = await this.subCategoriesRepository.findSubCategoriesByCategory(idCategory)

    console.log("==>", subCategories)
    return subCategories
  }
}

export { ListSubCategoriesUseCase }