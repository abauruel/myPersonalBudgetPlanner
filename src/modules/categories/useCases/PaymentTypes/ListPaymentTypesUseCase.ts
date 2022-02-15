import { PaymentsType } from "@modules/categories/infra/typeorm/entities/PaymentType";
import { IPaymentTypeRepository } from "@modules/categories/repositories/IPaymentTypeRepository";
import { inject } from "tsyringe";

class ListPaymentTypesUseCase {
  constructor(
    @inject("PaymentsTypeRepository")
    private paymentTypesRepository: IPaymentTypeRepository
  ) { }
  async execute(): Promise<PaymentsType[]> {
    return this.paymentTypesRepository.findAll()
  }
}

export { ListPaymentTypesUseCase }