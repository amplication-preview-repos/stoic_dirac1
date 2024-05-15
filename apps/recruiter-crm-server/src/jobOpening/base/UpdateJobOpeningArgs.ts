/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JobOpeningWhereUniqueInput } from "./JobOpeningWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { JobOpeningUpdateInput } from "./JobOpeningUpdateInput";

@ArgsType()
class UpdateJobOpeningArgs {
  @ApiProperty({
    required: true,
    type: () => JobOpeningWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobOpeningWhereUniqueInput)
  @Field(() => JobOpeningWhereUniqueInput, { nullable: false })
  where!: JobOpeningWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => JobOpeningUpdateInput,
  })
  @ValidateNested()
  @Type(() => JobOpeningUpdateInput)
  @Field(() => JobOpeningUpdateInput, { nullable: false })
  data!: JobOpeningUpdateInput;
}

export { UpdateJobOpeningArgs as UpdateJobOpeningArgs };