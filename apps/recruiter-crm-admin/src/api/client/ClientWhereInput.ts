import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobOpeningListRelationFilter } from "../jobOpening/JobOpeningListRelationFilter";

export type ClientWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  jobOpenings?: JobOpeningListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
