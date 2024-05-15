import { JobOpeningWhereInput } from "./JobOpeningWhereInput";
import { JobOpeningOrderByInput } from "./JobOpeningOrderByInput";

export type JobOpeningFindManyArgs = {
  where?: JobOpeningWhereInput;
  orderBy?: Array<JobOpeningOrderByInput>;
  skip?: number;
  take?: number;
};
