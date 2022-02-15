import { Router } from 'express'
import { categoryRoutes } from './category.routes'
import { subCategoryRoutes } from './subcategory.routes'
import { paymentTypeRoutes } from './paymentType.routes'

const routes = Router()

routes.use("/category", categoryRoutes)
routes.use("/subcategory", subCategoryRoutes)
routes.use("/paymentType", paymentTypeRoutes)

export { routes }