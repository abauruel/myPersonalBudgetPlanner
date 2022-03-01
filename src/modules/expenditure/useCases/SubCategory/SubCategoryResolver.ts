import { SubCategory } from "@modules/expenditure/infra/typeorm/entities/SubCategory"
import { container } from "tsyringe"
import { Resolver, Query, Arg, Mutation, Ctx, FieldResolver, Root } from "type-graphql"
import { ListSubCategoriesUseCase } from "./ListSubCategoriesUseCase"
import { CreateSubCategoryDto } from "../../dtos/Subcategory/CreateSubCategoryDto"
import { CreateSubCategoryUseCase } from "./CreateSubCategoryUseCase"
import { Context } from "apollo-server-core"
import { GetCategoryById } from "../Category/GetCategoryById"
import { Category } from "@modules/expenditure/infra/typeorm/entities/Category"
import { CategoryLoader } from "../Category/CategoryLoader"

@Resolver((of) => SubCategory)
class SubCategoryResolver {
  private listSubCategoryUseCase = container.resolve(ListSubCategoriesUseCase)
  private getCategoryByIdUseCase = container.resolve(GetCategoryById)
  @Query(() => [SubCategory])
  async getSubCategoriesByCategoryId(
    @Arg("idCategory") idCategory: string) {
    return this.listSubCategoryUseCase.execute(Number(idCategory))
  }

  @Mutation(() => SubCategory)
  async createSubCategory(
    @Arg("createsubCategory") createSubCategory: CreateSubCategoryDto, @Ctx() ctx: Context) {
    const createSubCategoryUseCase = container.resolve(CreateSubCategoryUseCase)
    const { idcategory, name } = createSubCategory
    return createSubCategoryUseCase.execute({ name, idcategory })
  }

  @FieldResolver(() => Category)
  async category(@Root() subcategory: SubCategory) {
    return await CategoryLoader.load(subcategory.idcategory)
  }

}


export { SubCategoryResolver }