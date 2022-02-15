import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSubCategoriesUseCase } from "./ListSubCategoriesUseCase";

class ListSubCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: idCategory } = request.params

    const listSubcategoriesUseCase = container.resolve(ListSubCategoriesUseCase)

    const subcategories = await listSubcategoriesUseCase.execute(Number(idCategory))

    return response.json(subcategories)

  }
}

export { ListSubCategoriesController }