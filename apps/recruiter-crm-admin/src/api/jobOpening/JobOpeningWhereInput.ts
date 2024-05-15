import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobOpeningWhereInput = {
  applications?: ApplicationListRelationFilter;
  client?: ClientWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
