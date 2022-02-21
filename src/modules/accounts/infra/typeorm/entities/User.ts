import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Group } from "./Group";
import { v4 as uuidV4 } from 'uuid'
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity('users')
class User {

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

  @Field()
  @Column()
  email: string

  @Field()
  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Field()
  @Column()
  idgroup: string

  @Field(() => Group)
  @ManyToOne(() => Group, group => group.users)
  group: Group
}

export { User }