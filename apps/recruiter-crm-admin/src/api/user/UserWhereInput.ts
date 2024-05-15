import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
