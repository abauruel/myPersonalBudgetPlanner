import { ICategoriesRepository } from "@modules/expenditure/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class GetCategoryById {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) { }
  async execute(id: number) {
    return this.categoryRepository.findById(id)
  }
}

export { GetCategoryById }