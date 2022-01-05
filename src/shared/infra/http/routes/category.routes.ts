import { CreateCategoryController } from '@modules/categories/useCases/CreateCategoryController'
import { Router } from 'express'

const categoryRoutes = Router()
const createCategoryController = new CreateCategoryController()

categoryRoutes.post("/", createCategoryController.handle)

export { categoryRoutes }