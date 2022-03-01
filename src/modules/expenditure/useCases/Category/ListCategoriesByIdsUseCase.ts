import { ICategoriesRepository } from "@modules/expenditure/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesByIdsUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) { }
  async execute(ids: number[]) {
    return this.categoryRepository.findByIds(ids)
  }
}

export { ListCategoriesByIdsUseCase }