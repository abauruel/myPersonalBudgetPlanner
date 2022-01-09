import { Group } from "@modules/accounts/infra/typeorm/entities/Group";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid'
import { SubCategory } from "./SubCategory";

@Entity('incomes')
class Income {
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @OneToMany(() => Group, groups => groups.incomes)
  group: Group

  @OneToMany(() => SubCategory, subcategories => subcategories.income)
  subcategory: SubCategory
}

export {
  Income

}