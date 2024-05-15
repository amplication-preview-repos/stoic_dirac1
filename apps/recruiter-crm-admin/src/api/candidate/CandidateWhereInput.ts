import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CandidateWhereInput = {
  application?: ApplicationWhereUniqueInput;
  applications?: ApplicationListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  resume?: JsonFilter;
};
