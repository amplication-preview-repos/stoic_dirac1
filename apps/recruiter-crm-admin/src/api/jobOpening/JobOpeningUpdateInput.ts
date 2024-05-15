import { ApplicationUpdateManyWithoutJobOpeningsInput } from "./ApplicationUpdateManyWithoutJobOpeningsInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type JobOpeningUpdateInput = {
  applications?: ApplicationUpdateManyWithoutJobOpeningsInput;
  client?: ClientWhereUniqueInput | null;
  description?: string | null;
  title?: string | null;
};
