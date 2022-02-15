import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePaymentTypeUseCase } from './CreatePaymentTypeUseCase'

class CreatePaymentTypeController {
  async handle(request: Request, response: Response) {
    const createPaymentTypesUseCase = container.resolve(CreatePaymentTypeUseCase)
    return response.json(createPaymentTypesUseCase)
  }
}

export { CreatePaymentTypeController }