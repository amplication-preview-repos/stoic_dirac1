import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ApplicationUpdateManyWithoutCandidatesInput } from "./ApplicationUpdateManyWithoutCandidatesInput";
import { InputJsonValue } from "../../types";

export type CandidateUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  applications?: ApplicationUpdateManyWithoutCandidatesInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  resume?: InputJsonValue;
};
