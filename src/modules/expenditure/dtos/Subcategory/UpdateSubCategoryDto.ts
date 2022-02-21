import { IsString } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import { CreateSubCategoryDto } from "./CreateSubCategoryDto";

@InputType()
export class UpdateSubCategoryDto implements Partial<CreateSubCategoryDto> {
  @IsString()
  @Field()
  id?: string;

}