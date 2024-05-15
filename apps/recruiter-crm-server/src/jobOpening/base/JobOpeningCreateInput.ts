/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApplicationCreateNestedManyWithoutJobOpeningsInput } from "./ApplicationCreateNestedManyWithoutJobOpeningsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";

@InputType()
class JobOpeningCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicationCreateNestedManyWithoutJobOpeningsInput,
  })
  @ValidateNested()
  @Type(() => ApplicationCreateNestedManyWithoutJobOpeningsInput)
  @IsOptional()
  @Field(() => ApplicationCreateNestedManyWithoutJobOpeningsInput, {
    nullable: true,
  })
  applications?: ApplicationCreateNestedManyWithoutJobOpeningsInput;

  @ApiProperty({
    required: false,
    type: () => ClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
  })
  client?: ClientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { JobOpeningCreateInput as JobOpeningCreateInput };