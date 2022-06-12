import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateExpenseUseCase } from "./createExpenseUseCase";

class CreateExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, idgroup, idpaymentType, idsubcategory, date, amount } = request.body
    const createExpenseUseCase = container.resolve(CreateExpenseUseCase)
    await createExpenseUseCase.execute({ name, idgroup, idpaymentType, idsubcategory, date, amount })
    return response.status(204).send()
  }
}

export { CreateExpenseController }