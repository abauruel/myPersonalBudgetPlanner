import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePaymentTypeUseCase } from './CreatePaymentTypeUseCase'

class CreatePaymentTypeController {
  async handle(request: Request, response: Response) {
    const createPaymentTypesUseCase = container.resolve(CreatePaymentTypeUseCase)
    const { name } = request.body
    await createPaymentTypesUseCase.execute(name)
    return response.status(204).send()
  }
}

export { CreatePaymentTypeController }