import 'reflect-metadata'
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ISubCategoriesRepository } from "../../repositories/ISubCategoriesRepository";
import { SubCategory } from '@modules/expenditure/infra/typeorm/entities/SubCategory';


type SubCategoryType = {
  name: string,
  idcategory: number
}

@injectable()
class CreateSubCategoryUseCase {
  constructor(
    @inject("SubCategoriesRepository")
    private subCategoriesRepository: ISubCategoriesRepository
  ) { }
  async execute({ idcategory, name }: SubCategoryType): Promise<SubCategory> {

    const subcategory = await this.subCategoriesRepository.findByName(name)
    console.log(subcategory)
    if (subcategory.length > 0) {
      throw new AppError("name already exists!")
    }

    if (!name) {
      throw new AppError("name is required!")
    }

    return this.subCategoriesRepository.create({ idcategory, name })
  }

}

export { CreateSubCategoryUseCase }