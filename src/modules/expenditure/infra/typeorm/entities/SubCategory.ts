import { __Field } from "graphql";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Category } from '../entities/Category'
import { Income } from "./Income";
import { v4 as uuidV4 } from 'uuid'

import { ObjectType, Field, ID, Int } from 'type-graphql'

@ObjectType()
@Entity('subcategories')
class SubCategory {
  @Field(() => ID!)
  @PrimaryGeneratedColumn()
  id?: string

  // @Field()
  @Column()
  name: string

  @Field(() => Int)
  @Column()
  idcategory: number

  @ManyToOne(() => Category, category => category.subcategories)
  @JoinColumn({ name: "idcategory" })
  @JoinTable()
  @Field(() => Category)
  category?: Category


  // @Field(() => [Income])
  // @ManyToOne(() => Income, incomes => incomes.subcategory)
  income?: Income[]
}

export { SubCategory }