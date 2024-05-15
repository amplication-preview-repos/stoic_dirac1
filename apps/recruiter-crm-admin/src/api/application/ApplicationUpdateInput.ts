import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { CandidateUpdateManyWithoutApplicationsInput } from "./CandidateUpdateManyWithoutApplicationsInput";
import { JobOpeningWhereUniqueInput } from "../jobOpening/JobOpeningWhereUniqueInput";

export type ApplicationUpdateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  candidates?: CandidateUpdateManyWithoutApplicationsInput;
  jobOpening?: JobOpeningWhereUniqueInput | null;
  status?: "Option1" | null;
};
