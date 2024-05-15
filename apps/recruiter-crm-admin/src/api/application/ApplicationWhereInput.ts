import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobOpeningWhereUniqueInput } from "../jobOpening/JobOpeningWhereUniqueInput";

export type ApplicationWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  candidates?: CandidateListRelationFilter;
  id?: StringFilter;
  jobOpening?: JobOpeningWhereUniqueInput;
  status?: "Option1";
};
