import { PaymentsType } from "@modules/categories/infra/typeorm/entities/PaymentType";
import { IPaymentTypeRepository } from "../IPaymentTypeRepository";

class PaymentTypesRepositoryInMemory implements IPaymentTypeRepository {
  private paymentTypes: PaymentsType[] = []

  async findById(id: number): Promise<PaymentsType> {
    const paymentTypeFound = this.paymentTypes.find(paymentType => paymentType.id == id)
    return paymentTypeFound
  }

  async findAll(): Promise<PaymentsType[]> {
    return this.paymentTypes
  }
  async create(name: string): Promise<void> {
    const paymentType = new PaymentsType()
    Object.assign(paymentType, { name })
    this.paymentTypes.push(paymentType)
  }

  async update(paymentType: PaymentsType): Promise<void> {
    const paymentTypesUpdated = this.paymentTypes.map(p => {
      if (p.id == paymentType.id) {
        p = paymentType
        return paymentType
      }
      return paymentType
    })
    this.paymentTypes = paymentTypesUpdated

  }


}

export { PaymentTypesRepositoryInMemory }