import 'reflect-metadata'
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }
  async execute(name: string): Promise<void> {

    if (!name) {
      throw new AppError("name is required!")
    }

    await this.categoriesRepository.create(name)
  }

}

export { CreateCategoryUseCase }