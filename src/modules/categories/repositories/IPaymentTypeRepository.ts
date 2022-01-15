import { PaymentsType } from "../infra/typeorm/entities/PaymentType";



interface IPaymentTypeRepository {
  findById(id: number): Promise<PaymentsType>
  findAll(): Promise<PaymentsType[]>
  create(name: string): Promise<void>
  update(paymentType: PaymentsType): Promise<void>
}

export { IPaymentTypeRepository }