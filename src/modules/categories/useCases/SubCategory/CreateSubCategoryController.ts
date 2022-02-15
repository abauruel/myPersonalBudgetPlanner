import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateSubCategoryUseCase } from './CreateSubCategoryUseCase'
class CreateSubCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, idCategory } = request.body
    const createSubCategoryUseCase = container.resolve(CreateSubCategoryUseCase)

    await createSubCategoryUseCase.execute({ name, idCategory })

    return response.status(204).send()
  }
}

export { CreateSubCategoryController }