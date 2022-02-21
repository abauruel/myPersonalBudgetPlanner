import { CreateCategoryDto } from "@modules/expenditure/dtos/Category/CreateCategoryDto"
import { Category } from "@modules/expenditure/infra/typeorm/entities/Category"
import { Context } from "apollo-server-core"
import { container } from "tsyringe"
import { Resolver, Query, Mutation, Arg, Ctx, InputTypeOptions } from "type-graphql"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"

@Resolver()
class CategoryResolver {
  @Query(() => [Category])
  async categories(parent, args, context) {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
    return listCategoriesUseCase.execute()
  }

  @Mutation(() => Category)
  async createCategory(
    @Arg("createCategoryDto") createCategoryDto: CreateCategoryDto,
    @Ctx() ctx: Context): Promise<Category> {
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
    return createCategoryUseCase.execute(createCategoryDto.name)
  }

}


export { CategoryResolver }