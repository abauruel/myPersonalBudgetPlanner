import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
  findAll(): Promise<Category[]>
  create(name: string): Promise<void>
}

export { ICategoriesRepository }