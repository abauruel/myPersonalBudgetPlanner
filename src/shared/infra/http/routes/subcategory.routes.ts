import { CreateSubCategoryController } from '@modules/categories/useCases/SubCategory/CreateSubCategoryController'
import { ListSubCategoriesController } from '@modules/categories/useCases/SubCategory/ListSubCategoriesController'
import { Router } from 'express'

const subCategoryRoutes = Router()
const createSubCategoryController = new CreateSubCategoryController()
const listSubCategoriesController = new ListSubCategoriesController()

subCategoryRoutes.get("/", listSubCategoriesController.handle)
subCategoryRoutes.post("/", createSubCategoryController.handle)

export { subCategoryRoutes }