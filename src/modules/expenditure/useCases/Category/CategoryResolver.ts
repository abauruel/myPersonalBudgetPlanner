import { CreateCategoryDto } from "@modules/expenditure/dtos/Category/CreateCategoryDto"
import { Category } from "@modules/expenditure/infra/typeorm/entities/Category"
import { SubCategory } from "@modules/expenditure/infra/typeorm/entities/SubCategory"
import { Context } from "apollo-server-core"
import { container } from "tsyringe"
import { Resolver, Query, Mutation, Arg, Ctx, InputTypeOptions, FieldResolver, Root } from "type-graphql"
import { ListSubCategoriesUseCase } from "../SubCategory/ListSubCategoriesUseCase"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"

type UserError = {
  message: string
}

type CategoryPayload = {
  userErrors: [UserError]
  category: Category
}

@Resolver(of => Category)
class CategoryResolver {
  @Query(() => [Category])
  async categories(parent, args, context) {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
    return listCategoriesUseCase.execute()
  }

  @FieldResolver(() => [SubCategory])
  async subcategories(@Root() category: Category) {
    const listsubcategoriesByCategory = container.resolve(ListSubCategoriesUseCase)
    const subcategories = await listsubcategoriesByCategory.execute(category.id)
    return subcategories
  }


  @Mutation(() => Category)
  async createCategory(
    @Arg("createCategoryDto") createCategoryDto: CreateCategoryDto,
    @Ctx() ctx: Context) {
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
    return createCategoryUseCase.execute(createCategoryDto.name)
  }

}


export { CategoryResolver }