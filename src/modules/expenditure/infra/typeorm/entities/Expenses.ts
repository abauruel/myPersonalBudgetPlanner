import { Group } from "@modules/accounts/infra/typeorm/entities/Group";
import { Field, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { PaymentsType } from "./PaymentType";
import { SubCategory } from "./SubCategory";

@ObjectType()
@Entity("expenses")
class Expenses {
  @Field()
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Field()
  @Column()
  idgroup: string;

  @OneToMany(() => Group, (groups) => groups.id)
  group: Group;

  @Field()
  @Column()
  idpaymentType: number;

  @OneToMany(() => PaymentsType, (paymentTypes) => paymentTypes.id)
  paymentType: PaymentsType;

  @Field()
  @Column()
  idsubcategory: number;

  @ManyToOne(() => SubCategory, (subcategory) => subcategory.expenses)
  @JoinColumn({ name: "idsubcategory" })
  subcategory: SubCategory;

  @Field()
  @Column()
  amount: number;
}

export { Expenses };
