import { Income } from "@modules/expenditure/infra/typeorm/entities/Income"
import { Field, ID, ObjectType } from "type-graphql"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidV4 } from 'uuid'
import { User } from "./User"

@ObjectType()
@Entity('groups')
class Group {
  @Field(() => ID)
  @PrimaryColumn()
  id: string

  @Field()
  @Column()
  name: string


  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Field(() => [User])
  @OneToMany(() => User, users => users.group)
  users: User[]

  @Field(() => [Income])
  @OneToMany(() => Income, incomes => incomes.group)
  incomes: Income[]


  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export {
  Group
}