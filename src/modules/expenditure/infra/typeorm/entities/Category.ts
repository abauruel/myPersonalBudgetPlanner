import { Field, ID, Int, ObjectType } from 'type-graphql'
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { SubCategory } from './SubCategory'

@ObjectType()
@Entity("categories")
class Category {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Field()
  @Column()
  name: string

  // @OneToMany(() => SubCategory, subcategory => subcategory.category)
  @Field((type) => [SubCategory], { nullable: true })
  subcategories?: SubCategory[]

}

export { Category }