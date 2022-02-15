import { IPaymentTypeRepository } from "@modules/expenditure/repositories/IPaymentTypeRepository";
import { getRepository, Repository } from "typeorm";
import { PaymentsType } from "../entities/PaymentType";


class PaymentTypesRepository implements IPaymentTypeRepository {
  private repository: Repository<PaymentsType>
  constructor() {
    this.repository = getRepository(PaymentsType)
  }
  async findByName(name: string): Promise<PaymentsType[]> {
    return await this.repository.find({
      where: {
        name
      }
    })
  }

  async findById(id: number): Promise<PaymentsType> {
    const paymentType = await this.repository.findOne({
      where: {
        id
      }
    })
    return paymentType
  }
  async findAll(): Promise<PaymentsType[]> {
    return await this.repository.find()
  }

  async create(name: string): Promise<void> {
    const paymentType = this.repository.create({ name })
    await this.repository.save(paymentType)
  }

  async update(paymentType: PaymentsType): Promise<void> {
    await this.repository.update(paymentType, { id: paymentType.id })
  }

}

export { PaymentTypesRepository }