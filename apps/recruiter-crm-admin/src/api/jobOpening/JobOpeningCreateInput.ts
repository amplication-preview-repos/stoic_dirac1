import { ApplicationCreateNestedManyWithoutJobOpeningsInput } from "./ApplicationCreateNestedManyWithoutJobOpeningsInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type JobOpeningCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutJobOpeningsInput;
  client?: ClientWhereUniqueInput | null;
  description?: string | null;
  title?: string | null;
};
