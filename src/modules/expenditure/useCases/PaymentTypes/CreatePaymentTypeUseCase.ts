import { PaymentsType } from "@modules/expenditure/infra/typeorm/entities/PaymentType";
import { IPaymentTypeRepository } from "@modules/expenditure/repositories/IPaymentTypeRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreatePaymentTypeUseCase {
  constructor(
    @inject("PaymentsTypeRepository")
    private paymentTypesRepository: IPaymentTypeRepository
  ) { }


  async execute(name: string) {

    const paymentType = await this.paymentTypesRepository.findByName(name)

    if (paymentType.length > 0) {
      throw new AppError("name already exists")
    }

    await this.paymentTypesRepository.create(name)
  }
}

export { CreatePaymentTypeUseCase }