import { JobOpeningCreateNestedManyWithoutClientsInput } from "./JobOpeningCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  address?: string | null;
  email?: string | null;
  jobOpenings?: JobOpeningCreateNestedManyWithoutClientsInput;
  name?: string | null;
  phone?: string | null;
};
