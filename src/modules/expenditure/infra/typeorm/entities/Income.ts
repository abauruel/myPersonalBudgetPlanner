import { Group } from "@modules/accounts/infra/typeorm/entities/Group";
import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid'
import { SubCategory } from "./SubCategory";

@ObjectType()
@Entity('incomes')
class Income {
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

  @Field(() => ID)
  @PrimaryColumn()
  id: string

  @Field()
  @Column()
  name: string

  @Field(() => Group)
  @OneToMany(() => Group, groups => groups.incomes)
  group: Group


  @Field(() => SubCategory)
  @OneToMany(() => SubCategory, subcategories => subcategories.income)
  subcategory: SubCategory
}

export {
  Income

}