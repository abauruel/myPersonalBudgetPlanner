import { __Field } from "graphql";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from "typeorm";
import { Category } from "../entities/Category";
import { Income } from "./Income";
import { v4 as uuidV4 } from "uuid";

import { ObjectType, Field, ID, Int } from "type-graphql";
import { Expenses } from "./Expenses";

@ObjectType()
@Entity("subcategories")
class SubCategory {
  @Field(() => ID!)
  @PrimaryGeneratedColumn()
  id?: string;

  // @Field()
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  idcategory: number;

  @ManyToOne(() => Category, (category) => category.subcategories)
  @JoinColumn({ name: "idcategory" })
  @JoinTable()
  @Field(() => Category)
  category?: Category;

  // @Field(() => [Income])
  // @ManyToOne(() => Income, incomes => incomes.subcategory)
  income?: Income[];

  @OneToMany(() => Expenses, (expenses) => expenses.subcategory, {
    cascade: true,
  })
  expenses?: Expenses[];
}

export { SubCategory };
