import { SortOrder } from "../../util/SortOrder";

export type JobOpeningOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
