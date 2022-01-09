import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Group } from "./Group";
import { v4 as uuidV4 } from 'uuid'

@Entity('users')
class User {

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Column()
  idgroup: string

  @ManyToOne(() => Group, group => group.users)
  group: Group
}

export { User }