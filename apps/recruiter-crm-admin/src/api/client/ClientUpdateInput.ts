import { JobOpeningUpdateManyWithoutClientsInput } from "./JobOpeningUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  address?: string | null;
  email?: string | null;
  jobOpenings?: JobOpeningUpdateManyWithoutClientsInput;
  name?: string | null;
  phone?: string | null;
};
