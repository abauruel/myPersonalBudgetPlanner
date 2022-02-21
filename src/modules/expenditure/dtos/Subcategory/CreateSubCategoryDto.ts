import { SubCategory } from "@modules/expenditure/infra/typeorm/entities/SubCategory";
import { isNumber, IsString } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class CreateSubCategoryDto extends SubCategory {
  @Field()
  @IsString()
  name: string

  @Field(() => Int)
  idcategory: number;

}