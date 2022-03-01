import { Category } from '@modules/expenditure/infra/typeorm/entities/Category'
import DataLoader from 'dataloader'
import { container } from 'tsyringe'
import { ListCategoriesByIdsUseCase } from './ListCategoriesByIdsUseCase'
type BatchCategory = (ids: number[]) => Promise<Category[]>

const batchCategories: BatchCategory = async (ids) => {
  const listCategoriesByIds = container.resolve(ListCategoriesByIdsUseCase)
  const categories = await listCategoriesByIds.execute(ids)
  const categoryMap: { [key: string]: Category } = {}
  categories.forEach((category) => {
    categoryMap[category.id] = category
  })

  return ids.map((id) => categoryMap[id])
}

export const CategoryLoader = new DataLoader<number, Category>(batchCategories)