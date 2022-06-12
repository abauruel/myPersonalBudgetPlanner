import { Router } from 'express'
import { categoryRoutes } from './category.routes'
import { subCategoryRoutes } from './subcategory.routes'
import { paymentTypeRoutes } from './paymentType.routes'
import { userRoutes } from './users.routes'
import { expenseRoutes } from './expense.routes'


const routes = Router()

routes.use("/category", categoryRoutes)
routes.use("/subcategory/", subCategoryRoutes)
routes.use("/paymentType", paymentTypeRoutes)
routes.use("/user", userRoutes)
routes.use("/expenses", expenseRoutes)

export { routes }