import { container } from 'tsyringe'
import { CategoriesRepository } from '@modules/categories/infra/typeorm/repositories/CategoriesRepository'
import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository'
import { IPaymentTypeRepository } from '@modules/categories/repositories/IPaymentTypeRepository'
import { PaymentTypesRepository } from '@modules/categories/infra/typeorm/repositories/PaymentTypesRepository'
import { ISubCategoriesRepository } from '@modules/categories/repositories/ISubCategoriesRepository'
import { SubCategoryRepository } from '@modules/categories/infra/typeorm/repositories/SubCategoryRepository'
import { IUsersRepositories } from '@modules/accounts/repositories/IUsersReposiotry'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IGroupsRepositories } from '@modules/accounts/repositories/IGroupsRepositories'
import { GroupsRepository } from '@modules/accounts/infra/typeorm/repositories/GroupsRepository'

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository)
container.registerSingleton<ISubCategoriesRepository>("SubCategoriesRepository", SubCategoryRepository)
container.registerSingleton<IPaymentTypeRepository>("PaymentsTypeRepository", PaymentTypesRepository)
container.registerSingleton<IGroupsRepositories>("GroupsRepository", GroupsRepository)
container.registerSingleton<IUsersRepositories>("UsersRepository", UsersRepository)