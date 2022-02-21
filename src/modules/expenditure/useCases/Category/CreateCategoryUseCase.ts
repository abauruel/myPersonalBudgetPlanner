import 'reflect-metadata'
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { Category } from '@modules/expenditure/infra/typeorm/entities/Category';

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }
  async execute(name: string): Promise<Category> {

    if (!name) {
      throw new AppError("name is required!")
    }

    return this.categoriesRepository.create(name)
  }

}

export { CreateCategoryUseCase }