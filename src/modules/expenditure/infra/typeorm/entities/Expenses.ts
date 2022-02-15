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

  @OneToMany(() => Group, groups => groups.id)
  group: Group

  @OneToMany(() => PaymentsType, paymentTypes => paymentTypes.id)
  paymentType: PaymentsType

  @OneToMany(() => SubCategory, subcategories => subcategories.id)
  subcategory: SubCategory
}

export {
  Expenses
}