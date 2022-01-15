import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Category } from '../entities/Category'
import { Income } from "./Income";

@Entity('subcategories')
class SubCategory {

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  idcategory: number

  @ManyToOne(() => Category, category => category.subcategories)
  category: Category

  @ManyToOne(() => Income, incomes => incomes.subcategory)
  income: Income
}

export { SubCategory }