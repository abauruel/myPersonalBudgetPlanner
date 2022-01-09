import { Income } from "@modules/categories/infra/typeorm/entities/Income"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidV4 } from 'uuid'
import { User } from "./User"

@Entity('groups')
class Group {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => User, users => users.group)
  users: User[]

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