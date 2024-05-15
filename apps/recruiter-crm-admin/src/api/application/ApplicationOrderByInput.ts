import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  candidateId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobOpeningId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
