import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
  findAll(): Promise<Category[]>
  findById(id: number): Promise<Category>
  create(name: string): Promise<Category>
  findByIds(ids: number[]): Promise<Category[]>
}

export { ICategoriesRepository }