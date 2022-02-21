import { Category } from "@modules/expenditure/infra/typeorm/entities/Category";
import { SubCategory } from "@modules/expenditure/infra/typeorm/entities/SubCategory";
import { IsOptional, IsString } from "class-validator";
import { Field, InputType, ObjectType, Int } from "type-graphql";

@InputType()
@ObjectType()
export class CreateCategoryDto {
  @IsString()
  @Field()
  name: string

}