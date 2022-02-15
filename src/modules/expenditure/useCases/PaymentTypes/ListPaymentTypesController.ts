import { Response } from "express";
import { container } from "tsyringe";
import { ListPaymentTypesUseCase } from "./ListPaymentTypesUseCase";

class ListPaymentTypesController {
  async handle(response: Response): Promise<Response> {

    const listPaymentTypesUseCase = container.resolve(ListPaymentTypesUseCase)
    const paymentTypes = await listPaymentTypesUseCase.execute()
    return response.json(paymentTypes)
  }
}

export { ListPaymentTypesController }