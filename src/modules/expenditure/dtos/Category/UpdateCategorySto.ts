import { Field, InputType, Int, ObjectType } from "type-graphql";
import { CreateCategoryDto } from "./CreateCategoryDto";

@InputType()
export class UpdateCategoryDto extends CreateCategoryDto {
  @Field(() => Int)
  id: number
}