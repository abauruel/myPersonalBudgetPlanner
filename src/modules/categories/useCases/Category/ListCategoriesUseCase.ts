import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) { }
  async execute() {
    return this.categoryRepository.findAll()
  }
}

export { ListCategoriesUseCase }