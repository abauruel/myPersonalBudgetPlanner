import { CreateCategoryController } from '@modules/expenditure/useCases/Category/CreateCategoryController'
import { ListCategoryController } from '@modules/expenditure/useCases/Category/ListaCategoriesController'
import { Router } from 'express'

const categoryRoutes = Router()
const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()

categoryRoutes.get("/", listCategoryController.handle)
categoryRoutes.post("/", createCategoryController.handle)

export { categoryRoutes }