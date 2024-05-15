import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { CandidateCreateNestedManyWithoutApplicationsInput } from "./CandidateCreateNestedManyWithoutApplicationsInput";
import { JobOpeningWhereUniqueInput } from "../jobOpening/JobOpeningWhereUniqueInput";

export type ApplicationCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  candidates?: CandidateCreateNestedManyWithoutApplicationsInput;
  jobOpening?: JobOpeningWhereUniqueInput | null;
  status?: "Option1" | null;
};
