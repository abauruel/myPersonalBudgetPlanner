import 'reflect-metadata'
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ISubCategoriesRepository } from "../../repositories/ISubCategoriesRepository";
import { SubCategory } from '@modules/categories/infra/typeorm/entities/SubCategory';


type SubCategoryType = {
  name: string,
  idCategory: number
}

@injectable()
class CreateSubCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private subCategoriesRepository: ISubCategoriesRepository
  ) { }
  async execute({ idCategory, name }: SubCategoryType): Promise<void> {

    const subcategory = await this.subCategoriesRepository.findByName(name)

    if (subcategory) {
      throw new AppError("name already exists!")
    }

    if (!name) {
      throw new AppError("name is required!")
    }

    await this.subCategoriesRepository.create({ idCategory, name })
  }

}

export { CreateSubCategoryUseCase }