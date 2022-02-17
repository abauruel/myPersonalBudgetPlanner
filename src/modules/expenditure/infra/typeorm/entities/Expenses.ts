import { Group } from "@modules/accounts/infra/typeorm/entities/Group"
import { Column, CreateDateColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { PaymentsType } from "./PaymentType"
import { SubCategory } from "./SubCategory"

class Expenses {

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  date: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Column()
  idgroup: number

  @OneToMany(() => Group, groups => groups.id)
  group: Group

  @Column()
  idpaymentType: number

  @OneToMany(() => PaymentsType, paymentTypes => paymentTypes.id)
  paymentType: PaymentsType

  @Column()
  idsubcategory: number

  @OneToMany(() => SubCategory, subcategories => subcategories.id)
  subcategory: SubCategory

}

export {
  Expenses
}