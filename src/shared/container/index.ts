import { container } from 'tsyringe'
import { CategoriesRepository } from '@modules/categories/infra/typeorm/repositories/CategoriesRepository'
import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository'
import { IPaymentTypeRepository } from '@modules/categories/repositories/IPaymentTypeRepository'
import { PaymentTypesRepository } from '@modules/categories/infra/typeorm/repositories/PaymentTypesRepository'

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository)
container.registerSingleton<IPaymentTypeRepository>("PaymentsTypeRepository", PaymentTypesRepository)