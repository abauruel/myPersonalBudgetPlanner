import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { SubCategory } from './SubCategory'

@Entity("categories")
class Category {

  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => SubCategory, subcategories => subcategories.category)
  subcategories: SubCategory[]

}

export { Category }