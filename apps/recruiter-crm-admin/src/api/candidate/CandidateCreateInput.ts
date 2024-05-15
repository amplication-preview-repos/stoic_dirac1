import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ApplicationCreateNestedManyWithoutCandidatesInput } from "./ApplicationCreateNestedManyWithoutCandidatesInput";
import { InputJsonValue } from "../../types";

export type CandidateCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  applications?: ApplicationCreateNestedManyWithoutCandidatesInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  resume?: InputJsonValue;
};
