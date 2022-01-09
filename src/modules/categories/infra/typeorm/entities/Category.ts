import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { SubCategory } from './SubCategory'

@Entity("categories")
class Category {

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @OneToMany(() => SubCategory, subcategories => subcategories.category)
  subcategories: SubCategory[]

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Category }