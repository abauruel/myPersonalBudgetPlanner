import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity('paymentTypes')
class PaymentsType {

  @PrimaryColumn()
  id: number

  @Column()
  name: string
}

export { PaymentsType }