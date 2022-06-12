import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateSubCategoryUseCase } from './CreateSubCategoryUseCase'
class CreateSubCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, idcategory } = request.body
    const createSubCategoryUseCase = container.resolve(CreateSubCategoryUseCase)

    const subCategory = await createSubCategoryUseCase.execute({ name, idcategory })

    return response.json(subCategory)
  }
}

export { CreateSubCategoryController }